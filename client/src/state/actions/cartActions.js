import axios from "axios";
import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch({ type: CART_ADD_ITEM_REQUEST });

    const {
      product_name,
      product_price,
      product_img,
      product_size,
      quantity,
      user_id,
    } = product;

    const { data } = await axios.post(`/user_cart/add/${user_id}`, {
      product_name,
      product_price,
      product_img,
      product_size,
      quantity,
    });

    dispatch({
      type: CART_ADD_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CART_ADD_ITEM_FAIL,
      payload: error,
    });
  }
};

// @DELETE /user_cart/delete/:user_id/:cart_item_id
export const removeFromCart = (id) => async (dispatch) => {
  try {
    // const { data } = await axios.delete(
    //   `/user_cart/delete/${user_id}/${cart_item_id}`
    // );

    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
  } catch (error) {}
};
