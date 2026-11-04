import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let transporter = null;

export const getTransporter = () => {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

  const user = SMTP_USER?.trim();
  const pass = SMTP_PASS?.trim().replace(/\s+/g, '');
  const host = SMTP_HOST?.trim() || 'smtp.gmail.com';

  if (user && pass && pass !== 'your-16-char-app-password') {
    if (host.includes('gmail.com')) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user,
          pass,
        },
      });
    } else {
      transporter = nodemailer.createTransport({
        host,
        port: Number(SMTP_PORT) || 587,
        secure: SMTP_SECURE === 'true' || SMTP_PORT === '465',
        auth: {
          user,
          pass,
        },
        tls: {
          rejectUnauthorized: process.env.NODE_ENV === 'production',
        },
      });
    }
  } else {
    // Development fallback mock transporter (logs to console)
    console.warn('⚠️ SMTP credentials not set. Contact emails will be logged to console.');
    transporter = {
      sendMail: async (mailOptions) => {
        console.log('📧 [DEV EMAIL MOCK SENT]:', {
          to: mailOptions.to,
          from: mailOptions.from,
          subject: mailOptions.subject,
          text: mailOptions.text,
        });
        return { messageId: `mock-${Date.now()}` };
      },
    };
  }

  return transporter;
};

