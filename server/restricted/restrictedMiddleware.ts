import jwt from 'jsonwebtoken';
import { secret_jtw } from '../envVariables';
import { onError } from '../middlewares';

enum Role {
   CLIENT, ADMIN
}

function validateToken(req: any, res: any, next: any) {
   const { authorization } = req.headers; 

   if(!secret_jtw) return;
   if(authorization) {
      jwt.verify(authorization, secret_jtw, (err: any, decodedToken: any) => {
         if(err) {
            return onError(res, 401, "Invalid credentials!.");
         } else {
            req.decodedToken = decodedToken;
            next();
         }
      })
   } else {
      return onError(res, 400, "No credentials provided!.");
   }
}

function checkForRole(req: any, res: any, next: any) {
   if(req.decodedToken && req.decodedToken.isAdmin === Role.ADMIN) {
      next();
   } else {
      return onError(res, 403, "Authorization required!.")
   }
}

export {
   validateToken,
   checkForRole
}