require("dotenv").config();
const nodemailer = require("nodemailer");

exports.mailSend = async (email, emailType, html) => {
  try {
    let transporter;

    switch (emailType) {
      case "Register":
        transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          secure: true,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        break;

      case "OTP":
        transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          secure: true,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        break;

      case "Contact":
        transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          secure: true,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        break;
        case "Payment":
          transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_PASSWORD,
            },
          });
          break;
          case "ProfileUpdate":
            transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              secure: true,
              auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
              },
            });
            break;
      default:
        throw new Error("Invalid email type");
    }

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: getSubject(emailType), // Get subject based on emailType
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`${emailType} Email sent: ${info.response}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Function to get subject based on emailType
function getSubject(emailType) {
  switch (emailType) {
    case "Register":
      return "Welcome to Our Book Store Project";
    case "OTP":
      return "OTP Verification";
    case "Contact":
      return "Contact Form Submission Confirmation";
      case "Payment":
        return "Payment Successfully";
        case "ProfileUpdate":
          return "ProfileUpdate Successfully";
    default:
      throw new Error("Invalid email type");
  }
}
