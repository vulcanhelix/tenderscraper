import { Resend } from 'resend';

export async function CustomSendVerificationRequest(
  { identifier, url }: { identifier: string; url: string },
  resend: Resend
) {
  const { host } = new URL(url);
  try {
    const data = await resend.emails.send({
      from: `Acme <onboarding@${host}>`,
      to: [identifier],
      subject: `Sign in to ${host}`,
      html: emailTemplate(url, host),
    });
    console.log("Verification email sent:", data);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error('Failed to send verification email.');
  }
}

// Email HTML body
function html({ url, host }: { url: string; host: string }) {
  return `
    <body style="background: #f9f9f9;">
      <div style="background-color: #fff; padding: 20px; border-radius: 5px; margin: 40px auto; width: 600px; max-width: 100%; font-family: Arial, sans-serif;">
        <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Sign in to ${host}</h1>
        <p style="font-size: 16px; line-height: 24px;">Click the button below to sign in:</p>
        <a href="${url}" style="background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px;">Sign in</a>
        <p style="font-size: 14px; color: #777; margin-top: 30px;">If you did not request this email, you can safely ignore it.</p>
      </div>
    </body>
  `;
}

// Email Text body (fallback for email clients that don't render HTML)
function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

function emailTemplate(url:string, host: string) {
    return html({url, host})
}
