import axios from "axios";
import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_REMOVE_ITEM,
  USER_CART_REQUEST,
  USER_CART_SUCCESS,
  USER_CART_FAIL,
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

export const getUserCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_CART_REQUEST });

    const { data } = await axios.get(`/user_cart/get_all/${id}`);

    dispatch({
      type: USER_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
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
