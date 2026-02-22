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

/**
 * Generate admin notification email - shows inquiry details
 */
export function generateAdminEmailTemplate(data: InquiryData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Student Inquiry</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 700px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 300;
          letter-spacing: 0.5px;
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }
        .field {
          display: flex;
          margin-bottom: 12px;
          padding: 8px 0;
        }
        .field-label {
          width: 150px;
          font-weight: 600;
          color: #333;
          font-size: 13px;
        }
        .field-value {
          flex: 1;
          color: #555;
          font-size: 13px;
        }
        .badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .badge.yes {
          background-color: #dcfce7;
          color: #166534;
        }
        .badge.no {
          background-color: #fee2e2;
          color: #991b1b;
        }
        .footer {
          background-color: #f9fafb;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
          font-size: 12px;
          color: #6b7280;
        }
        .timestamp {
          color: #999;
          font-size: 11px;
          margin-top: 10px;
        }
        .logo {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo img {
          height: 50px;
          width: auto;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">
            <img src="https://aarohiedu.com/assets/logo/logo.png" alt="Aarohi Edu Logo" />
          </div>
          <h1> New Student Inquiry</h1>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Personal Information</div>
            <div class="field">
              <div class="field-label">Full Name:</div>
              <div class="field-value">${data.fullName}</div>
            </div>
            <div class="field">
              <div class="field-label">Email:</div>
              <div class="field-value">${data.email}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number:</div>
              <div class="field-value">${data.phoneNumber}</div>
            </div>
            <div class="field">
              <div class="field-label">Date of Birth:</div>
              <div class="field-value">${new Date(data.dob).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Academic Information</div>
            <div class="field">
              <div class="field-label">Education Qualification:</div>
              <div class="field-value">${
                data.educationQualification || "Not specified"
              }</div>
            </div>
            <div class="field">
              <div class="field-label">English Test Status:</div>
              <div class="field-value">${
                data.englishTest
                  ? data.englishTest.charAt(0).toUpperCase() +
                    data.englishTest.slice(1)
                  : "Not specified"
              }</div>
            </div>
            ${
              data.testScore
                ? `
            <div class="field">
              <div class="field-label">Test Score:</div>
              <div class="field-value">${data.testScore}</div>
            </div>
            `
                : ""
            }
            <div class="field">
              <div class="field-label">Join Test Program:</div>
              <div class="field-value">
                <span class="badge ${data.wantToJoinTest ? "yes" : "no"}">
                  ${data.wantToJoinTest ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Preferences</div>
            <div class="field">
              <div class="field-label">University Preference:</div>
              <div class="field-value">${
                data.universityPreference || "Not specified"
              }</div>
            </div>
            <div class="field">
              <div class="field-label">Course Preference:</div>
              <div class="field-value">${
                data.coursePreference || "Not specified"
              }</div>
            </div>
          </div>
        </div>

        <div class="footer">
          <p>This is an automated notification. A new student inquiry has been submitted through the website.</p>
          <div class="timestamp">${new Date().toLocaleString("en-US", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })} UTC</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate thank you email for user
 */
export function generateUserThankYouTemplate(userName: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Your Inquiry</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
          color: white;
          padding: 40px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 0.5px;
        }
        .icon {
          font-size: 48px;
          margin-bottom: 15px;
        }
        .content {
          padding: 40px 30px;
          line-height: 1.8;
        }
        .greeting {
          font-size: 18px;
          color: #333;
          margin-bottom: 20px;
        }
        .main-message {
          font-size: 16px;
          color: #555;
          margin-bottom: 25px;
          line-height: 1.6;
        }
        .highlights {
          background-color: #fff7ed;
          border-left: 4px solid #f97316;
          padding: 20px;
          margin: 25px 0;
          border-radius: 6px;
        }
        .highlights h3 {
          margin-top: 0;
          color: #d97706;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .highlights ul {
          margin: 10px 0;
          padding-left: 20px;
        }
        .highlights li {
          margin: 8px 0;
          color: #555;
          font-size: 14px;
        }
        .closing {
          font-size: 16px;
          color: #555;
          margin-top: 30px;
        }
        .signature {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }
        .team-name {
          font-weight: 600;
          color: #333;
          font-size: 15px;
        }
        .company-name {
          color: #f97316;
          font-weight: 600;
          font-size: 16px;
          margin-top: 10px;
        }
        .footer {
          background-color: #f9fafb;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
          font-size: 12px;
          color: #6b7280;
        }
        .footer a {
          color: #f97316;
          text-decoration: none;
        }
        .logo {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo img {
          height: 50px;
          width: auto;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">
            <img src="https://aarohiedu.com/assets/logo/logo.png" alt="Aarohi Edu Logo" />
          </div>
          <div class="icon">✓</div>
          <h1>Thank You!</h1>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>
          
          <p class="main-message">
            Thank you for reaching out to <strong>Aarohi Education Consultancy Pvt Ltd.</strong>! We truly appreciate your interest in our institution and the opportunity to be part of your educational journey.
          </p>

          <p class="main-message">
            We have successfully received your inquiry and our dedicated team is already reviewing your information. We understand that choosing the right educational path is an important decision, and we're here to help guide you through every step.
          </p>

          <div class="highlights">
            <h3>What Happens Next?</h3>
            <ul>
              <li>Our admissions team will review your application carefully</li>
              <li>You'll receive personalized guidance based on your qualifications and preferences</li>
              <li>We'll be in touch shortly with more information and next steps</li>
              <li>Feel free to contact us if you have any questions in the meantime</li>
            </ul>
          </div>

          <p class="closing">
            Once again, thank you for choosing AAarohi Education Consultancy Pvt Ltd. We're excited to help you achieve your academic goals and pursue your dreams!
          </p>

          <div class="signature">
            <p style="margin: 0;">Warm regards,</p>
            <div class="team-name">Admissions Team</div>
            <div class="company-name">Aarohi Edu</div>
          </div>
        </div>

        <div class="footer">
          <p style="margin: 0 0 10px 0;">© ${new Date().getFullYear()} AAarohi Education Consultancy Pvt Ltd. All rights reserved.</p>
          <p style="margin: 0;">This is an automated response. If you have any questions, please contact us directly.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
