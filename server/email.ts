import nodemailer from 'nodemailer';

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

// Create a transporter using Gmail (easier setup than SendGrid)
function createTransporter() {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password for Gmail
      },
    });
  }
  
  // Fallback: use a test account for development
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'test@test.com',
      pass: 'test123',
    },
  });
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    const info = await transporter.sendMail({
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email error:', error);
    return false;
  }
}

export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const { name, email, subject, message } = formData;
  
  const emailParams: EmailParams = {
    to: 'amit09yadav12@gmail.com', // Your email to receive messages
    from: `"${name}" <${email}>`, // From the contact form sender
    subject: `Portfolio Contact: ${subject}`,
    text: `
New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><em>Sent from your portfolio website</em></p>
    `,
  };

  return await sendEmail(emailParams);
}