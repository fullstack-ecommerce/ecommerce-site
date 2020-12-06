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
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">Account</Link>
        </div>
        <img src={cartIcon} alt="cart icon" className="cart__icon" />
      </div>
    </div>
  );
};

export default RenderNavbar;
