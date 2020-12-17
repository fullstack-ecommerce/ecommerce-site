import express from 'express';
import { ResultProp } from '../interfaces/productInterfaces';
import { onError } from '../middlewares';
import { validateId, validateProductBody } from '../middlewares/validateProducts';
import { 
   add, 
   addProductSizeIds, 
   getProducts, 
   addSizes, 
   addImg, 
   addProductImgIds, 
   update,
   deleteProduct,
   getById,
   getProductById
} from '../models/productModel';
import { checkForRole, validateToken } from '../restricted/restrictedMiddleware';

// add middlewares for CRUD operations only!
const route = express();

// @GET /product/get_all
route.get("/get_all", async (req, res) => {
   try {
      const products = await getProducts();
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

//@GET /product/get/:product_id
route.get("/get/:product_id", validateId, async (req, res) => {
   const { product_id } = req.params;

   try {
      const [ product ] = await getProductById(product_id);
      res.status(200).json(product);
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
})

// @GET /product/get?page={pageNumber}&limit={limitNumber}
route.get("/get", async (req, res) => {
   const page = Number(req.query.page);
   const limit = Number(req.query.limit);

   const result: ResultProp = {};

   const products = await getProducts();

   const starts = (page - 1) * limit;
   const ends = page * limit;
   const maxPage = Math.ceil(products.length / limit);

   if(ends < products.length) {
      result.next = {
         page: page + 1,
         limit: limit
      };
   }

   if(starts > 0) {
      result.previous = {
         page: page - 1,
         limit: limit
      };
   }

   if(page > maxPage) {
      return onError(res, 500, "Page does not exist!.");
   }
   result.paginatedProducts = products.slice(starts, ends);
   res.status(200).json(result);
});

// @POST /product/create
route.post('/create', validateProductBody, async (req, res) => {
   const { name, description, price, sizes, images } = req.body;
   const productBody = { name, description, price };

   try {
      // Since sizes here is an array we need to iterate and add
      // product id for sizes and images
      const [product] = await add(productBody);
      sizes.forEach(async (size: string) => {
         const response = await addSizes({ size });
         await addProductSizeIds({ size_id: response[0], product_id: product.id });
      });
      images.forEach(async (img_url: string) => {
         const response = await addImg({ img_url });
         await addProductImgIds({ img_id: response[0], product_id: product.id });
      });
      res.status(201).json({ message: "New product added successfully!." });
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @PATCH /product/edit/:product_id
route.patch("/edit/:product_id", validateId, async (req, res) => {
   const { product_id } = req.params;

   try {
      await update(product_id, req.body);
      res.status(200).json({ message: "Prodcut updated successfully!." })
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @DELETE /product/delete/:product_id
route.delete("/delete/:product_id", validateId, async (req, res) => {
   const { product_id } = req.params;

   try {
      await deleteProduct(product_id);
      res.status(200).json({ message: "Product deleted successfully!" });
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
})

export default route;
