import express from 'express';
import { 
   add, 
   addProductSizeIds, 
   getProducts, 
   addSizes, 
   addImg, 
   addProductImgIds 
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

route.post('/create', async (req, res) => {
   const {name, price, sizes, images} = req.body;
   const productBody = {name, price};
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

export default route;
