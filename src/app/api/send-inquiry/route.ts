import {
  generateAdminEmailTemplate,
  generateUserThankYouTemplate,
} from "@/src/lib/emailTemplates";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface InquiryData {
  fullName: string;
  email: string;
  dob: string;
  educationQualification: string;
  englishTest: string;
  testScore: string;
  wantToJoinTest: boolean;
  phoneNumber: string;
  universityPreference: string;
  coursePreference: string;
}

export async function POST(request: NextRequest) {
  try {
    console.log("Received inquiry request");
    const data: InquiryData = await request.json();
    console.log("Form data:", data);

    // Validate required fields
    if (!data.fullName || !data.phoneNumber || !data.email) {
      console.error("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check environment variables
    console.log("GMAIL_EMAIL:", process.env.GMAIL_EMAIL ? "Set" : "Not set");
    console.log(
      "GMAIL_APP_PASSWORD:",
      process.env.GMAIL_APP_PASSWORD ? "Set" : "Not set"
    );

    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Gmail credentials in environment variables");
      return NextResponse.json(
        {
          error: "Email service not configured",
          details: "Gmail credentials missing",
        },
        { status: 500 }
      );
    }

    console.log("Creating transporter...");
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    console.log("Verifying connection...");
    // Test the connection
    await transporter.verify();
    console.log("Connection verified successfully");

    // Generate email templates
    const adminEmailHtml = generateAdminEmailTemplate(data);
    const userEmailHtml = generateUserThankYouTemplate(data.fullName);

    // Send email to admin with inquiry details
    console.log("Sending inquiry email to admin...");
    const adminEmailResult = await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `New Student Inquiry from ${data.fullName}`,
      html: adminEmailHtml,
      replyTo: data.email,
    });

    console.log(
      "Admin inquiry email sent successfully:",
      adminEmailResult.messageId
    );

    // Send thank you email to the user
    console.log("Sending thank you email to user...");
    const userEmailResult = await transporter.sendMail({
      from: `Aarohi Edu <${process.env.GMAIL_EMAIL}>`,
      to: data.email,
      subject: "Thank You for Your Inquiry - Aarohi Edu",
      html: userEmailHtml,
    });

    console.log(
      "User thank you email sent successfully:",
      userEmailResult.messageId
    );

    return NextResponse.json(
      { message: "Inquiry sent successfully and confirmation email delivered" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error stack:", error instanceof Error ? error.stack : "");
    return NextResponse.json(
      {
        error: "Failed to send inquiry",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
