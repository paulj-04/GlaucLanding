import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { rateLimit } from "@/lib/rateLimit";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim() ?? "unknown";

    const limiter = rateLimit({
      key: `contact:${ipAddress}`,
      limit: 5,
      windowMs: 60 * 60 * 1000,
    });

    if (!limiter.success) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many messages from this connection. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid contact submission.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const userAgent = request.headers.get("user-agent");

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email.toLowerCase(),
      company: data.company || null,
      interest_type: data.interestType,
      message: data.message,
      consent: data.consent,
      ip_address: ipAddress,
      user_agent: userAgent,
      source: "landing_page",
      status: "new",
    });

    if (error) {
      console.error("Supabase contact insert error:", error);

      return NextResponse.json(
        {
          ok: false,
          message: "Could not save message. Please try again.",
        },
        { status: 500 }
      );
    }


    try {
      await sendContactNotification({
        name: data.name,
        email: data.email.toLowerCase(),
        company: data.company || null,
        interestType: data.interestType,
        message: data.message,
      });
    } catch (emailError) {
      console.error("Contact notification email error:", emailError);
    }

    return NextResponse.json({
      ok: true,
      message: "Message received. The Glauc team can follow up soon.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}