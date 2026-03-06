import nodemailer from "nodemailer";

const createTransporter = () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  
  // Mock transporter for testing
  return {
    sendMail: async (mailOptions) => {
      console.log("-----------------------------------------");
      console.log("Mock Email Sent!");
      console.log(`To: ${mailOptions.to}`);
      console.log(`From: ${mailOptions.from}`);
      console.log(`Subject: ${mailOptions.subject}`);
      console.log(`Text: ${mailOptions.text}`);
      console.log("-----------------------------------------");
      return { messageId: "mock-id-12345" };
    }
  };
};

const transporter = createTransporter();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    console.log(`New newsletter subscription: ${email}`);
    
    const mailOptions = {
      from: process.env.EMAIL_USER || "Sam9501139019@gmail.com",
      to: "Sam9501139019@gmail.com",
      subject: `New Newsletter Subscription`,
      text: `A new user has subscribed to the newsletter: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Error processing subscription:", error);
    res.status(500).json({ error: "Failed to subscribe. Please try again later." });
  }
}
