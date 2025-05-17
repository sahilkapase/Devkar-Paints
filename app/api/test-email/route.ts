import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: " anilpdeokar9820@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function GET() {
  try {
    if (!process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Email configuration is missing" },
        { status: 500 }
      )
    }

    // Send a test email
    const info = await transporter.sendMail({
      from: " anilpdeokar9820@gmail.com",
      to: " anilpdeokar9820@gmail.com",
      subject: "Test Email from Devkar Paints Website",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Test Email</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
            <p style="margin: 10px 0;">This is a test email to verify that the email functionality is working correctly.</p>
            <p style="margin: 10px 0;">If you're receiving this email, it means the email configuration is set up properly.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
      message: "Test email sent successfully"
    })
  } catch (error) {
    console.error("Error sending test email:", error)
    return NextResponse.json(
      { 
        error: "Failed to send test email",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
} 