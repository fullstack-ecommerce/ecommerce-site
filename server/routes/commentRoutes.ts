import express from 'express';
import { 
   validateCommentIds, 
   validateProductCommentIds 
} from '../middlewares/validateComments';
import { 
   addComment, 
   addProductCommentIds, 
   deleteProductComment, 
   updateProductComment 
} from '../models/commentModel';
import { addRating, addRatingProductIds } from '../models/ratingModel';

const route = express.Router();

route.post("/create/:product_id/:user_id", 
validateCommentIds, 
async (req, res) => {
   const { product_id, user_id } = req.params;
   const { rating, comment } = req.body;
   
   const toNumber = {
      product_id: Number(product_id),
      user_id: Number(user_id)
   }

   try {
      const commentRes = await addComment({comment});
      const ratingRes = await addRating({rating: Number(rating)});

      await addProductCommentIds({...toNumber, comment_id: commentRes[0]});
      await addRatingProductIds({...toNumber, rating_id: ratingRes[0]});
      res.status(201).json({message: "Review added!."});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.patch('/edit/:product_id/:comment_id', 
validateProductCommentIds, 
async (req, res) => {
   const { product_id, comment_id } = req.params;
   const productId = Number(product_id);
   const commentId = Number(comment_id);
   const comment = "deleted by moderator";

   try {
      await updateProductComment(productId, commentId, {comment});
      res.status(200).json({message: "Comment updated successfully!."});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.delete('/delete/:product_id/:comment_id', 
validateProductCommentIds, 
async (req, res) => {
   const { product_id, comment_id } = req.params;
   const productId = Number(product_id);
   const commentId = Number(comment_id);

   try {
      await deleteProductComment(productId, commentId);
      res.status(200).json({message: "Comment deleted successfully!."});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

export default route;
