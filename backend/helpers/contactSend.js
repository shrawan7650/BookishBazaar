exports.generateContactConfirmationHTML = (name, email, message) => {
  return `
    <div style="background-color: #f2f2f2; padding: 20px;">
      <h2>Contact Form Submission</h2>
      <p>Hi ${name},</p>
      <p>Your message has been successfully received. Here are the details:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p>We will get back to you as soon as possible.</p>
      <p>Best regards,<br>Our Book Store Team</p>
    </div>
  `;
};
