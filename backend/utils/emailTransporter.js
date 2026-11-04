
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let transporter = null;

export const getTransporter = () => {
  if (transporter) return transporter;

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
  } = process.env;

  const user = SMTP_USER?.trim();
  const pass = SMTP_PASS?.trim().replace(/\s+/g, '');
  const host = SMTP_HOST?.trim() || 'smtp.gmail.com';

  // Validate SMTP credentials
  const hasValidCredentials =
    user &&
    pass &&
    pass !== 'your-16-char-app-password';

  if (hasValidCredentials) {
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

    return transporter;
  }

  // Never simulate email delivery in production
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'SMTP configuration is missing. Configure SMTP_USER and SMTP_PASS.'
    );
  }

  // Development-only mock transporter
  console.warn(
    'SMTP credentials not configured. Using development email mock.'
  );

  transporter = {
    sendMail: async (mailOptions) => {
      console.log('[DEV EMAIL MOCK SENT]:', {
        to: mailOptions.to,
        from: mailOptions.from,
        subject: mailOptions.subject,
      });

      return {
        messageId: `mock-${Date.now()}`,
      };
    },
  };

  return transporter;
};

