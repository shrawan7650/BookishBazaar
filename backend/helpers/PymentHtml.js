exports.generatePaymentConfirmationHTML = (username,totalPrice) => {
  return `
 
      <div style="background-color: #f2f2f2; padding: 20px;">
        <h2>Payment Successful</h2>
        <p>Hi ${username},</p>
        <p>Total Amount Paid: $${totalPrice}</p>
        <p>Thank you for shopping with us!</p>
        <p>Best regards,<br>Our Book Store Team</p>
        </div>
        
        `;
      };
      
      // <p>Your payment for order ${orderNumber} has been successfully processed.</p>