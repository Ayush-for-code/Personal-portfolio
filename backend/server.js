import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
console.log("ENV LOADED:", process.env.GMAIL_USER, process.env.GMAIL_PASS);


const app = express();
app.use(cors());
app.use(express.json());

// Email route
app.post("/send-email", async (req, res) => {
  const { email, phone, message } = req.body;

  if (!email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "email and message required" });
  }

  try {
   const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});


    const mailOptions = {
  from: email,
  to: process.env.GMAIL_USER,
  subject: `New Contact Form Message from ${email}`,
  text: `Phone: ${phone}\nMessage: ${message}`
};
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res
      .status(500)
      .json({ success: false, error: "Failed to send email" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
