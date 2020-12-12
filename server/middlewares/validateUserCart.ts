import {Request, Response, NextFunction} from 'express';
import { getUserCartByIds } from "../models/userCartModel";

async function validateCartIds(
   req: Request, 
   res: Response, 
   next: NextFunction
) {
   const { user_id, cart_item_id } = req.params;

   try {
      const userCart = await getUserCartByIds(user_id, cart_item_id);
      if(userCart.length) {
         next();
      } else {
         res.status(404).json({ errorMessage: "Product not found!, invalid ID." });
      }
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
}

function validateCartBody(
   req: Request, 
   res: Response, 
   next: NextFunction
) {
   const { product_name, product_price, quantity, product_img } = req.body;

   if(!product_name || !product_price || !quantity || !product_img) {
      res.status(400).json({ errorMessage: "Enter all require fields!." });
   } else {
      next();
   }
}

export {
   validateCartIds,
   validateCartBody
}
