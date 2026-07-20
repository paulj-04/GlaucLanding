import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid form submission.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim() ?? null;
    const userAgent = request.headers.get("user-agent");

    const { error } = await supabaseAdmin
      .from("waitlist_submissions")
      .insert({
        name: data.name,
        email: data.email.toLowerCase(),
        role: data.role,
        organization: data.organization || null,
        reason: data.reason || null,
        consent: data.consent,
        marketing_opt_in: data.marketingOptIn ?? false,
        ip_address: ipAddress,
        user_agent: userAgent,
        source: "landing_page",
      });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          {
            ok: false,
            message: "This email is already on the waitlist.",
          },
          { status: 409 }
        );
      }

      console.error("Supabase waitlist insert error:", error);

      return NextResponse.json(
        {
            ok: false,
            message: error.message || "Could not save submission. Please try again.",
            code: error.code,
            details: error.details,
            hint: error.hint,
        },
    { status: 500 }
);
    }

    return NextResponse.json({
      ok: true,
      message: "You are on the waitlist.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}