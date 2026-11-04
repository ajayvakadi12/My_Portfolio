import { getTransporter } from '../utils/emailTransporter.js';

// Simple sanitizer for text
const sanitize = (str = '') => {
  return String(str)
    .trim()
    .replace(/[<>]/g, '');
};

// Simple email regex validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).toLowerCase());
};

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid name (at least 2 characters).',
      });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a message with at least 10 characters.',
      });
    }

    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email).toLowerCase();
    const cleanMessage = sanitize(message);

    const targetRecipient = process.env.CONTACT_EMAIL || 'vakadiajay666@gmail.com';
    const senderUser = process.env.SMTP_USER || cleanEmail;

    const transporter = getTransporter();

    const mailOptions = {
      from: `"Portfolio Contact Form" <${senderUser}>`,
      replyTo: cleanEmail,
      to: targetRecipient,
      subject: `New Portfolio Message from ${cleanName}`,
      text: `You received a new message from Ajay Vakadi's Developer Portfolio Contact Form:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}\n\nSent at: ${new Date().toISOString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #0b1020; color: #f8fafc;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">New Portfolio Contact Message</h2>
          <p style="margin-top: 15px;"><strong style="color: #2dd4bf;">Sender Name:</strong> ${cleanName}</p>
          <p><strong style="color: #2dd4bf;">Sender Email:</strong> <a href="mailto:${cleanEmail}" style="color: #a78bfa;">${cleanEmail}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #151f35; border-radius: 6px; border-left: 4px solid #8b5cf6;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #e2e8f0;">${cleanMessage}</p>
          </div>
          <p style="margin-top: 25px; font-size: 12px; color: #94a3b8; border-top: 1px solid rgba(148, 163, 184, 0.2); padding-top: 10px;">
            Delivered securely via Ajay Vakadi Portfolio Backend API
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to deliver your message. Please try again or reach out directly at vakadiajay666@gmail.com.',
    });
  }
};

