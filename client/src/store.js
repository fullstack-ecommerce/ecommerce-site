import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./state/reducers/userReducers";
import { cartReducer } from "./state/reducers/cartReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
});



const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
