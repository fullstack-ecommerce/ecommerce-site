import express from 'express';
import { validateId, validateProductBody } from '../middlewares/validateProducts';
import { 
   add, 
   addProductSizeIds, 
   getProducts, 
   addSizes, 
   addImg, 
   addProductImgIds, 
   update,
   deleteProduct
} from '../models/productModel';

const route = express();

route.get("/get_all", async (req, res) => {
   try {
      const products = await getProducts();
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.post('/create', validateProductBody, async (req, res) => {
   const {name, description, price, sizes, images} = req.body;
   const productBody = {name, description, price};

   try {
      const [product] = await add(productBody);
      sizes.forEach(async (size: string) => {
         const response = await addSizes({size});
         await addProductSizeIds({size_id: response[0], product_id: product.id});
      });
      images.forEach(async (img_url: string) => {
         const response = await addImg({img_url});
         await addProductImgIds({img_id: response[0], product_id: product.id});
      });
      res.status(201).json({message: "New product added successfully!."});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.patch("/edit/:product_id", validateId, async (req, res) => {
   const {product_id} = req.params;

   try {
      await update(product_id, req.body);
      res.status(200).json({message: "Prodcut updated successfully!."})
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.delete("/delete/:product_id", validateId, async (req, res) => {
   const {product_id} = req.params;

   try {
      await deleteProduct(product_id);
      res.status(200).json({message: "Product deleted successfully!"});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
})

export default route;
