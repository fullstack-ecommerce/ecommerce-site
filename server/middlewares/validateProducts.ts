import { getById } from "../models/productModel";


function validateProductBody(req: any, res: any, next: any) {
   const {name, description, price, sizes, images} = req.body;
   
   if(!name || !description || !price || !sizes.length || !images.length) {
      res.status(400).json({errorMessage: "Enter all require fields!."})
   } else {
      next();
   }
}
async function validateId(req: any, res: any, next: any) {
   const {product_id} = req.params;

   try {
      const product = await getById(product_id);
      if(product.length) {
         next();
      } else {
         res.status(404).json({errorMessage: "Invalid ID"});
      }
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
}

export {
   validateProductBody,
   validateId
}
