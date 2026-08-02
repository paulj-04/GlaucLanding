export async function verifyTurnstileToken(token: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return {
      success: true,
      skipped: true,
    };
  }

  if (!token) {
    return {
      success: false,
      skipped: false,
    };
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  return {
    success: Boolean(result.success),
    skipped: false,
  };
}