import db from '../data/config-db';
import { 
   CommentProductIdsProps, 
   CommentProps 
} from '../interfaces/productInterfaces';

// Get by comment id
function getCommentById(id: number) {
   return db("comments").where({id});
}

// Add comment
function addComment(comment: CommentProps) {
   return db("comments").insert(comment, 'id');
}

// Add product and coments id's 
function addProductCommentIds(body: CommentProductIdsProps) {
   return db("product_comments").insert(body, 'id');
}

// Get single comment for product
function getProductComment(product_id: number, comment_id: number) {
   return db("comments as c")
      .join("product_comments as pc", "c.id", "pc.comment_id")
      .where({"pc.product_id": product_id})
      .where({"pc.comment_id": comment_id});
}

async function updateProductComment(
   product_id: number, 
   comment_id: number, 
   changes: CommentProps
   ) {
   const [productComment] = await getProductComment(product_id, comment_id);
   return db("comments as c")
      .where({"c.id": productComment.comment_id})
      .update(changes);
}

async function deleteProductComment(product_id: number, comment_id: number) {
   const [productComment] = await getProductComment(product_id, comment_id);
   return db("comments as c")
      .where({"c.id": productComment.comment_id})
      .del();
}

export {
   getCommentById,
   addComment,
   addProductCommentIds,
   updateProductComment,
   deleteProductComment
}
