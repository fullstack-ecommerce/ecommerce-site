import { sendGrdiKey, sender } from '../envVariables';
import sgMail from '@sendgrid/mail';


function resetPasswordEmail(email: string, token: string) {
   if(!sendGrdiKey ) return null;
   if(!sender) return null;

   sgMail.setApiKey(sendGrdiKey);
   const msg = {
      to: email,
      from: sender, 
      subject: "Reset your Password",
      text: 'important',
      html: `<a href=${token}>click the link ${token}</a>`,
   }
   sgMail
      .send(msg)
      .then(() => {
         console.log('Email sent')
      })
      .catch((error: any) => {
         console.error(error)
      })
}

function updatedPasswordEmail(email: string) {
   if(!sendGrdiKey ) return null;

   if(!sender) return null;

   sgMail.setApiKey(sendGrdiKey);
   const msg = {
      to: email,
      from: sender, 
      subject: "Thank you",
      text: 'important',
      html: `<h3>Password was updated successfully!</h3>`,
   }
   sgMail
      .send(msg)
      .then(() => {
         console.log('Email sent')
      })
      .catch((error: any) => {
         console.error(error)
      })
}

export {
   resetPasswordEmail,
   updatedPasswordEmail
}
