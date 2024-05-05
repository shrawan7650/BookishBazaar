exports.sendOTPEmail = (otpCode) => {
  return (
    `
      <div style="background-color: #f2f2f2; padding: 20px;">
        <h2>OTP Verification</h2>
        <p>Hi,</p>
        <p>Your OTP (One-Time Password) for verification is:</p>
        <h3 style="font-size: 24px; background-color: #007bff; color: #fff; padding: 10px; border-radius: 5px;">${otpCode}</h3>
        <p>Please enter this OTP to complete the verification process.</p>
        <p>If you didn't request this OTP, you can ignore this email.</p>
        <p>This OTP will expire in a short period of time for security reasons.</p>
        <p>If you have any questions or need assistance, please contact us.</p>
        <p>Best regards,<br>Our Book Store Team</p>
      </div>
   `
  );
};
