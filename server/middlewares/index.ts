import jwt from 'jsonwebtoken';
import { secret_jtw } from "../envVariables";
import { UserProps } from "../interfaces";

export function generateToken(user: UserProps) {
   if(!secret_jtw) return; 

   const payload = {
      user: user.email,
      isAdmin: user.is_admin
   };
   const options = {
      expiresIn: "1h"
   };
   return jwt.sign(payload, secret_jtw, options);
}

export function onError(res: any, statusCode: number, message: string) {
   return res.status(statusCode).json({errorMessage: message});
}
