import { Request, Response, NextFunction } from 'express';
import { onError } from ".";
import { getCommentById } from "../models/commentModel";
import { getById } from "../models/productModel";
import { findById } from "../models/userModel";

async function validateCommentIds(
   req: Request, 
   res: Response, 
   next: NextFunction
) {
   const { user_id, product_id } = req.params;

   const user = await findById(user_id);
   const product = await getById(product_id);

   if(!user.length || !product.length) {
      return onError(res, 404, "Invalid ID!.");
   } else {
      next();
   }
}

async function validateProductCommentIds(
   req: Request, 
   res: Response, 
   next: NextFunction
) {
   const {product_id, comment_id} = req.params;

   const comment = await getCommentById(Number(comment_id));
   const product = await getById(product_id);

   if(!comment.length || !product.length) {
      return onError(res, 404, "Invalid ID!.");
   } else {
      next();
   }
}

export {
   validateCommentIds,
   validateProductCommentIds
}
