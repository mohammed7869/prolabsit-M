import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Create a transporter using SMTP (example config)
        // In production, use environment variables for these values
        const transporter = nodemailer.createTransport({
            host: "smtp.example.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "user@example.com",
                pass: "password",
            },
        });

        // Send email
        await transporter.sendMail({
            from: '"ProlabsIT Website" <website@prolabsit.com>',
            to: "admin@prolabsit.com", // Change to receiver
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
