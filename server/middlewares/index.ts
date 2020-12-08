import jwt from 'jsonwebtoken';
import { secret_jtw } from "../envVariables";
import { UserProps } from "../interfaces";

export function generateToken(user: UserProps) {
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

export function onError(res: any, statusCode: number, message: string) {
   return res.status(statusCode).json({errorMessage: message});
}
