import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.product_name,
      image: data.product_img,
      price: data.product_price,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
