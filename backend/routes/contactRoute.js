import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USR_EMAIL,
                pass: process.env.USR_PASSWORD, // ✅ FIX: must be pass, not password
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.USR_EMAIL,
            subject: `Contact Form Submission from ${name}`,
            text: `You have received a new message from your portfolio contact form:\n
Name: ${name}
Email: ${email}

Message:
${message}`,
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Nodemailer error:", error); 
        res.status(500).json({ message: "Failed to send email." });
    }
});

export default router;
