import {Request, Response, NextFunction } from 'express'
import { findBy, findById } from "../models/userModel";

function validateUserBody(
   req: Request, 
   res: Response, 
   next: NextFunction
) {
   const { username, email, password } = req.body;

   if(!username || !email || !password) {
      res.status(400).json({ errorMessage: "Enter all require fields!." });
   } else {
      next();
   }
   
}

async function checkifEmailExist(
   req: Request, 
   res: Response, 
   next: NextFunction
) {
   const { email } = req.body;

   const [user] = await findBy({ email });
   if(!user) {
      next();
   } else {
      res.status(500).json({ errorMessage: "User with that email already exist, please try another one!." });
   }
}

async function validateLoginValues(
   req: Request, 
   res: Response, 
   next: NextFunction
) {
   const { email, password } = req.body;
   if(!email || !password) {
      res.status(400).json({ errorMessage: "Enter all require fields!." });
   } else {
      next();
   }
}

async function validateId(
   req: Request, 
   res: Response, 
   next: NextFunction
) {
   const {user_id} = req.params;

   try {
      const user = await findById(user_id);
      if(user.length) {
         next();
      } else {
         res.status(404).json({ errorMessage: "Invalid ID." });
      }
   } catch (error) {
      res.status(500).json({ errorMessage: error.message })
   }
}

export {
   validateUserBody,
   checkifEmailExist,
   validateLoginValues,
   validateId
}
