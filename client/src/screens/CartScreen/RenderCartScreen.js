import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
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

  console.log(userInfo);

  const userCart = useSelector((state) => state.userCart);
  console.log(userCart);
  const { cart } = userCart;

  useEffect(() => {
    dispatch(getUserCart(userInfo.user_id));
  }, [dispatch]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const subTotal = cart
    .map((p) => p.product_price)
    .reduce((acc, cur) => acc + cur, 0);
  const taxTotal = subTotal * 0.1;
  const totalPrice = subTotal + taxTotal;

  console.log(taxTotal);

  return (
    <div className="small__container cart__page">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>

        {cart.map((c) => {
          return (
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
                      type="button"
                      onClick={() => removeFromCartHandler()}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </td>

              <td>{c.quantity}</td>
              <td>${c.product_price}</td>
            </tr>
          );
        })}
      </table>

      <div className="total__price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>${subTotal}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>${taxTotal}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${totalPrice}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RenderCartScreen;
