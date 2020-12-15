import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secret_jtw } from '../envVariables';
import { onError } from '../middlewares';

enum Role {
   CLIENT, ADMIN
}

// User needs to be registered in order to add items and leave reviews
function validateToken(req: any, res: Response, next: NextFunction) {
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

// Only admins is able to make CRUD operations to products and
// able to make users admins
function checkForRole(req: any, res: Response, next: NextFunction) {
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