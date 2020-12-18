import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants";

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_ADD_ITEM_REQUEST:
      return {
        loading: true,
      };
    case CART_ADD_ITEM_SUCCESS:
      return {
        loading: false,
        success: true,
        cart: action.payload,
      };

    case CART_ADD_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
