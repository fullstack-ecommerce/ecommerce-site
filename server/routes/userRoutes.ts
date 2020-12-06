import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { add, findBy } from '../models/userModel';
import { rounds, secret_jtw } from '../envVariables';
import { UserProps } from '../interfaces';

const route = express();

route.post("/register", async (req, res) => {
   const user = req.body; 

   const hashPassword = bcrypt.hashSync(user.password, rounds);
   user.password = hashPassword;

   try {
      await add(user);
      res.status(201).json({message: "Created user successfully!."})
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.post('/login', async (req, res) => {
   const {email, password} = req.body;

   try {
      const [user] = await findBy({email});
      if(user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         res.status(200).json({token});
      } else {
         res.status(400).json({errorMessage: "Invalid email or password"});
      }
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

function generateToken(user: UserProps) {
   if(secret_jtw) {
      const payload = {
         user: user.email
      };
      const options = {
         expiresIn: "1h"
      };
      return jwt.sign(payload, secret_jtw, options);
   }
   return;

}


export default route;
