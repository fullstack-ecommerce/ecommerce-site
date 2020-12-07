import nodemailer from 'nodemailer';
import { gmailUser, gmailPassword } from '../envVariables';

async function resetPasswordEmail(email: string, token: string) {
   const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
         user: gmailUser,
         pass: gmailPassword
      },
   });

   const info = await transporter.sendMail({
      from: "App name",
      to: email,
      subject: "Reset Password",
      html: `<a href=${token}>click the link ${token}</a>`
   });
   console.log("Message sent: %s", info.messageId);
}

async function updatedPasswordEmail(email: string) {
   const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
         user: gmailUser,
         pass: gmailPassword
      },
   });

   const info = await transporter.sendMail({
      from: "App name",
      to: email,
      subject: "thank you",
      html: `<h3>Password was updated successfully!</h3>`
   });
   console.log("Message sent: %s", info.messageId);
}

export {
   resetPasswordEmail,
   updatedPasswordEmail
}
