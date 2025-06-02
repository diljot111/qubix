import axios from "axios";

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY!;

export async function POST(req: Request) {
  const body = await req.json();
  const { captchaToken, ...formData } = body;

  if (!captchaToken) {
    return new Response(JSON.stringify({ message: "Captcha token missing" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Prepare form-urlencoded params
    const params = new URLSearchParams();
    params.append("secret", SECRET_KEY);
    params.append("response", captchaToken);

    // Post to Google reCAPTCHA API
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      params.toString(),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const { success, score, "error-codes": errorCodes } = response.data;

    if (!success) {
      return new Response(
        JSON.stringify({ message: "Captcha verification failed", errorCodes }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      );
    }


    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Captcha verification error:", error);
    return new Response(
      JSON.stringify({ message: "Server error during captcha verification" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
