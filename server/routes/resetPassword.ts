import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';
import { 
   resetPasswordEmail, 
   updatedPasswordEmail 
} from '../emailFiles/sendEmails';
import { resetPassword, rounds } from '../envVariables';
import { findBy, updateUser } from '../models/userModel';

const route = express.Router();

route.patch("/forgot_password",  async (req, res) => {
   const { email } = req.body;
   
   if(!resetPassword) return;

   try {
      const [user] = await findBy({email});
      if(!user) {
         res.status(404).json({errorMessage: "Invalid email!."});
      } else {
         const token = jwt.sign({user: user.email}, resetPassword, {expiresIn: "10m"});

         await updateUser(user.id, {reset_link: token});
         resetPasswordEmail(email, token);
         res.status(200).json({message: "email sent!"});
      }
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.patch('/reset_password/:token', async (req, res) => {
   const reset_link = req.params.token;
   const newPassword = req.body;

   if(!resetPassword) return;

   if(reset_link) {
      jwt.verify(reset_link, resetPassword, (error, decodedToken) => {
         if(error) {
            res
               .status(401)
               .json({errorMessage: "Incorrect token or it is expired!."});
         }
      });
   }

   try {
      const [user] = await findBy({reset_link});
      if(!user) {
         res
            .status(400)
            .json({errorMessage: "User with this link does not exist!."});
      }
      const hashPassword = bcrypt.hashSync(newPassword.password, rounds);
      newPassword.password = hashPassword;

      const updatedCredentials = {
         password: newPassword.password,
         reset_link: ""
      };

      await updateUser(user.id, updatedCredentials);
      updatedPasswordEmail(user.email);
      res.status(200).json({message: "Password updated successfully!."});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

export default route;
