import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory (__dirname equivalent in ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the backend folder
dotenv.config({
  path: path.join(__dirname, ".env"),
});

console.log("Current Directory:", __dirname);
console.log("ENV LOADED:");
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "Loaded ✅" : "Not Loaded ❌");

const app = express();

app.use(cors());
app.use(express.json());

// Email route
app.post("/send-email", async (req, res) => {
  const { email, phone, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({
      success: false,
      error: "Email and message are required.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Message from ${email}`,
      text: `Phone: ${phone}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Error sending email:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});