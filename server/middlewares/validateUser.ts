import { findById } from "../models/userModel";

function validateUserBody(req: any, res: any, next: any) {
   const {username, email, password} = req.body;

   if(!username || !email || !password) {
      res.status(400).json({errorMessage: "Enter all require fields!."});
   } else {
      next();
   }
   
}

async function validateId(req: any, res: any, next: any) {
   const {user_id} = req.params;

   try {
      const user = await findById(user_id);
      if(user.length) {
         next();
      } else {
         res.status(404).json({errorMessage: "Invalid ID."});
      }
   } catch (error) {
      res.status(500).json({errorMessage: error.message})
   }
}

export {
   validateUserBody,
   validateId
}
