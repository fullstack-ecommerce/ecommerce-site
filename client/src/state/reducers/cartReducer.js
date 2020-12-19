import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_DELETE_ITEM_REQUEST,
  CART_DELETE_ITEM_SUCCESS,
  CART_DELETE_ITEM_FAIL,
  USER_CART_REQUEST,
  USER_CART_SUCCESS,
  USER_CART_FAIL,
} from "../constants/cartConstants";

export const cartAddItemReducer = (state = {}, action) => {
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

export const cartDeleteItemReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_DELETE_ITEM_REQUEST:
      return {
        loading: true,
      };
    case CART_DELETE_ITEM_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case CART_DELETE_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userCartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case USER_CART_REQUEST:
      return {
        loading: true,
        cart: [],
      };
    case USER_CART_SUCCESS:
      return {
        loading: false,
        cart: action.payload,
      };
    case USER_CART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
