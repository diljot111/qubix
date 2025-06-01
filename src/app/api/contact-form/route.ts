// /pages/api/contact-form.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ message: "Captcha token missing" });
  }

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaToken}`;

  try {
    const response = await axios.post(verifyUrl);
    const { success, score } = response.data;

    if (!success) {
      return res.status(403).json({ message: "Captcha verification failed" });
    }

    // Continue to process form (e.g., store in DB or send email)
    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error during captcha verification" });
  }
}
