exports.profileUpdatHtml = (email) => {
  return `

<div style="background-color: #f2f2f2; padding: 20px;">
<h2>Profile Update Confirmation</h2>
<p>Hi ${email}</p>
<p>Your profile has been successfully updated.</p>
<p>Here are the details of your updated profile:</p>

<p>If you did not make this change, please contact us immediately.</p>
<p>Best regards,<br>Our Book Store Team</p>
</div>`;
};
