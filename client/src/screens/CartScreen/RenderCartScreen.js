import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCart,
  getUserCart,
} from "../../state/actions/cartActions";
import buy1 from "../../assets/images/buy1.jpg";
import buy2 from "../../assets/images/buy2.jpg";
import buy3 from "../../assets/images/buy3.jpg";
import "./cartScreen.css";

const RenderCartScreen = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userCart = useSelector((state) => state.userCart);
  const { cart } = userCart;

  const cartDeleteItem = useSelector((state) => state.cartDeleteItem);
  const { loading, success, error } = cartDeleteItem;

  useEffect(() => {
    dispatch(getUserCart(userInfo.user_id));
  }, [dispatch, success, userInfo.user_id]);

  const removeFromCartHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteItemFromCart(id));
    }
  };

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  // quantity * price is not working

  const subTotal = cart
    .map((p) => p.product_price)
    .reduce((acc, cur) => acc + cur, 0);
  const taxTotal = subTotal * 0.1;
  const totalPrice = subTotal + taxTotal;

  return (
    <div className="small__container cart__page">
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </tbody>
        {loading && <h3>Loading...</h3>}
        {success && <h3>{success}</h3>}
        {error && <h3>{error}</h3>}
        {cart.map((c) => {
          return (
            <tbody key={c.id}>
              <tr>
                <td>
                  <div className="cart__info">
                    <img src={buy1} alt="small shirt" />
                    <div>
                      <p>{c.product_name}</p>
                      <small>Price: ${c.product_price}</small>
                      <br />
                      <small>Size: {c.product_size}</small>
                      <br />
                      {/* need to pass in product id */}
                      <button
                        type="submit"
                        onClick={() => removeFromCartHandler(c.cart_item_id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>

                <td>{c.quantity}</td>
                <td>${c.quantity * c.product_price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <div className="total__price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>${addDecimals(subTotal)}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>${addDecimals(taxTotal)}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${addDecimals(totalPrice)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RenderCartScreen;
