import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Resend default test email
      to: "Sam9501139019@gmail.com",
      subject: `New Newsletter Subscription`,
      html: `<p>A new user has subscribed to the newsletter: <strong>${email}</strong></p>`
    });
    return res.status(200).json({ success: true, message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Error processing subscription email:", err);
    return res.status(500).json({ error: "Email failed" });
  }
}
