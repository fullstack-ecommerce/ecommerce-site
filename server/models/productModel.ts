import db from '../data/config-db';
import { 
   ImgsProps, 
   ProductImgIdsProps, 
   ProductProps, 
   ProductSizeIdsProps, 
   SizesProps 
} from '../interfaces/productInterfaces';

// Get product by id
function getById(id: string) {
   return db("product").where({id});
}

// Get all products with product comments, sizes, images, comments,
// ratings since those are in separate tables we join them by product id
async function getProducts() {
   const products = await db("product");
   return Promise.all(
      products.map(async (product) => ({
         ...product,
         sizes: await db("sizes as z")
            .join("product_size as pz", "z.id", "pz.product_id")
            .where({"pz.product_id": product.id})
            .select("z.id", "z.size"),
         images: await db("images as i")
            .join("product_img as pi", "i.id", "pi.img_id")
            .where({"pi.product_id": product.id})
            .select("i.id", "i.img_url"),
         comments: await db("comments as c")
            .join("product_comments as pc", "c.id", "pc.comment_id")
            .where({"pc.product_id": product.id})
            .select("c.id", "c.comment", "c.created_at"),
         ratings: await db("ratings as r")
            .join("product_ratings as pr", "r.id", "pr.rating_id")
            .where({"pr.product_id": product.id})
            .select("r.id", "r.rating", "r.created_at")
      }))
   )
}

async function add(product: ProductProps) {
   const [id] = await db("product").insert(product, 'id');
   return getById(id);
}

function addImg(imgBody: ImgsProps) {
   return db("images").insert(imgBody, 'id');
}

// Add product sizes
function addSizes(sizeBody: SizesProps) {
   return db("sizes").insert(sizeBody, 'id');
}

// Add product and images id's
function addProductImgIds(idsBody: ProductImgIdsProps) {
   return db("product_img").insert(idsBody, "id");
}

// Add products and sizes id's
function addProductSizeIds(idsBody: ProductSizeIdsProps) {
   return db("product_size").insert(idsBody, 'id');
}

function update(id: string, changes: ProductProps) {
   return db("product").where({id}).update(changes);
}

function deleteProduct(id: string) {
   return db("product").where({id}).del();
}

export {
   getById,
   getProducts,
   add,
   addImg,
   addSizes,
   addProductImgIds,
   addProductSizeIds,
   update,
   deleteProduct
}
