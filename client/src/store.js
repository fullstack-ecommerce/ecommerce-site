import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDetailsReducer,
  userDeleteReducer,
  userUpdateReducer,
  userUpdateProfileReducer,
  userUpdatePasswordReducer,
  userForgotPasswordReducer,
  userResetPasswordReducer,
} from "./state/reducers/userReducers";
import {
  cartAddItemReducer,
  userCartReducer,
  cartDeleteItemReducer,
} from "./state/reducers/cartReducer";
import {
  productListReducer,
  productDetailsReducer,
  productCreateReducer,
  productDeleteReducer,
  productUpdateReducer,
} from "./state/reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdatePassword: userUpdatePasswordReducer,
  userForgotPassword: userForgotPasswordReducer,
  userResetPassword: userResetPasswordReducer,
  cartAddItem: cartAddItemReducer,
  cartDeleteItem: cartDeleteItemReducer,
  userCart: userCartReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
