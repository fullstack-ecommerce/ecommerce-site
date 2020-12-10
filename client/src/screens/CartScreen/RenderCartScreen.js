import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../state/actions/cartActions";
import buy1 from "../../assets/images/buy1.jpg";
import buy2 from "../../assets/images/buy2.jpg";
import buy3 from "../../assets/images/buy3.jpg";
import "./cartScreen.css";

const RenderCartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cart)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="small__container cart__page">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div className="cart__info">
              <img src={buy1} alt="small shirt" />
              <div>
                <p>Red Printed T-shirt</p>
                <small>Price: $50.00</small>
                <br />
                {/* need to pass in product id */}
                <button type="button" onClick={() => removeFromCartHandler()}>Remove</button>
              </div>
            </div>
          </td>

          <td>
            <input type="number" />
          </td>
          <td>$50.00</td>
        </tr>

        <tr>
          <td>
            <div className="cart__info">
              <img src={buy2} alt="shoes" />
              <div>
                <p>Black Shoes</p>
                <small>Price: $60.00</small>
                <br />
                <button>Remove</button>
              </div>
            </div>
          </td>

          <td>
            <input type="number" />
          </td>
          <td>$50.00</td>
        </tr>

        <tr>
          <td>
            <div className="cart__info">
              <img src={buy3} alt="pants" />
              <div>
                <p>Pants</p>
                <small>Price: $70.00</small>
                <br />
                <button>Remove</button>
              </div>
            </div>
          </td>

          <td>
            <input type="number" />
          </td>
          <td>$50.00</td>
        </tr>
      </table>

      <div className="total__price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>$180.00</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$25.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$205.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RenderCartScreen;
