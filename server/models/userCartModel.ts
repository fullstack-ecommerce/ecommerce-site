import db from '../data/config-db';
import { 
   CartItemsProps, 
   CartUserItemIdsProps 
} from '../interfaces/productInterfaces';

// Get user cart by id's
function getUserCartByIds(user_id: string, cart_item_id: string) {
      return db("cart_item as ct")
         .join("user_cart as uc", "ct.id", "uc.cart_item_id")
         .where({"uc.user_id": user_id})
         .where({"ct.id": cart_item_id});
         // [{}];
}

// Get user cart.
// this will return an array if multiple found
function getUserCart(user_id: string) {
   return db("cart_item as ct")
      .join("user_cart as uc", "ct.id", "uc.cart_item_id")
      .where({"uc.user_id": user_id});
}

// Add product to cart
function addToCart(cart: CartItemsProps) {
   return db("cart_item").insert(cart, 'id');
}

function userCartIds(idsBody: CartUserItemIdsProps) {
   return db("user_cart").insert(idsBody, 'id');
}

async function updateUserCart(
   user_id: string, 
   cart_item_id: string, 
   cart: CartItemsProps
   ) {
   const [userCart] = await getUserCartByIds(user_id, cart_item_id);
   return db("cart_item as c")
      .where({"c.id": userCart.cart_item_id})
      .update(cart);
}

async function deleteItemFromCart(user_id: string, cart_item_id: string) {
   const [userCart] = await getUserCartByIds(user_id, cart_item_id);
   return db("cart_item as c")
      .where({"c.id": userCart.cart_item_id})
      .del();
}

export {
   getUserCartByIds,
   getUserCart,
   addToCart,
   userCartIds,
   updateUserCart,
   deleteItemFromCart
}
