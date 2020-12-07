import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import cartIcon from "../../assets/images/cart.png";
import "./navbar.css";

const RenderNavbar = () => {
  return (
    <div className="header__container">
      <div className="navbar__container">
        <div className="logo__container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="link__container">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {/* remove login and register links when user is logged in, show user's name */}
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <img src={cartIcon} alt="cart icon" className="cart__icon" />
      </div>
    </div>
  );
};

export default RenderNavbar;
