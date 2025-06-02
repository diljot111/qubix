import axios from "axios";

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req: Request) {
  const body = await req.json();
  const { captchaToken } = body;

  if (!captchaToken) {
    return new Response(JSON.stringify({ message: "Captcha token missing" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaToken}`;

  try {
    const response = await axios.post(verifyUrl);
    const { success, score } = response.data;

    if (!success) {
      return new Response(JSON.stringify({ message: "Captcha verification failed" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Continue to process form (e.g., store in DB or send email)
    return new Response(JSON.stringify({ message: "Form submitted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error during captcha verification" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
