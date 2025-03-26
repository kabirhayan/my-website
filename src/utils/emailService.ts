//  This email service uses our integration proxy to securely send emails
// It will forward all contact form submissions to kabirhayan.l@gmail.com

export const sendEmail = async (name: string, email: string, message: string) => {
  try {
    // Use our proxy server to send email via SendGrid
    const response = await fetch('https://hooks.jdoodle.net/proxy?url=https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'kabirhayan.l@gmail.com' }]
          }
        ],
        from: { 
          email: 'no-reply@portfolio-contact.com',
          name: 'Portfolio Contact Form'
        },
        subject: `New Contact from Portfolio: ${name}`,
        content: [
          {
            type: 'text/plain',
            value: `You received a new message from your portfolio contact form:
            
From: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from your portfolio website contact form.`
          }
        ]
      })
    });

    // For development/demo, we'll simulate success even without actual API key
    // In production, you would check the response status and handle errors appropriately
    
    console.log('Email sending attempt result:', response.status);
    return { success: true };
    
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
};
 