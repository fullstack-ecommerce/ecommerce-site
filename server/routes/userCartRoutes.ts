import express from 'express';
import { validateId } from '../middlewares/validateUser';
import { validateCartBody, validateCartIds } from '../middlewares/validateUserCart';
import { 
   addToCart, 
   deleteItemFromCart, 
   getUserCart, 
   updateUserCart, 
   userCartIds 
} from '../models/userCartModel';

const route = express.Router();

route.get("/get_all/:user_id", validateId, async (req, res) => {
   const { user_id } = req.params;
   try {
      const userCart = await getUserCart(user_id);
      res.status(200).json(userCart);
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.post("/add/:user_id", validateCartBody, validateId, async (req, res) => {
   const {user_id} = req.params;

   try {
      const [id] = await addToCart(req.body);
      const body = { user_id: Number(user_id), cart_item_id: id};
      await userCartIds(body);
      res.status(201).json(id);
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.patch("/edit/:user_id/:cart_item_id", validateCartIds, async (req, res) => {
   const { user_id, cart_item_id } = req.params;

   try {
      await updateUserCart(user_id, cart_item_id, req.body);
      res.status(200).json({message: "Cart updated successfully!."});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.delete("/delete/:user_id/:cart_item_id", validateCartIds, async (req, res) => {
   const { user_id, cart_item_id } = req.params;

   try {
      await deleteItemFromCart(user_id, cart_item_id);
      res.status(200).json({message: "Item cart deleted successfully!."});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
})

export default route;
