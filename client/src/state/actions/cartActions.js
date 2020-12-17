import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (product) => async (dispatch) => {
  const {
    user_id,
    product_name,
    product_img,
    product_price,
    quantity,
  } = product;

  const { data } = await axios.post(`/user_cart/add/${user_id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product_name,
      product_img,
      product_price,
      quantity,
    },
  });
};

export const removeFromCart = (id) => async (dispatch) => {
  // @DELETE /user_cart/delete/:user_id/:cart_item_id
  
  // const { data } = await axios.delete(
  //   `/user_cart/delete/${user_id}/${cart_item_id}`
  // );

  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
};
