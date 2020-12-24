import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/actions/userActions";
import logo from "../../assets/images/logo.png";
import cartIcon from "../../assets/images/cart.png";
import "./navbar.css";

const RenderNavbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
          {userInfo ? (
            <div>
              <h6>Welcome</h6>
              <h3>{userInfo.username}</h3>
              <Link to="/profile">
                <h3>Profile</h3>
              </Link>
              <button onClick={logoutHandler}>Logout</button>
            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          {userInfo && userInfo.is_admin && (
            <>
              <Link to="/admin/product/add">Add Product</Link>
              <Link to="/admin/products">
                <h6>Products List</h6>
              </Link>
              <Link to="/admin/users">
                <h6>Users List</h6>
              </Link>
            </>
          )}
        </div>
        <>
          <Link to="/cart">
            <h6>My Cart</h6>
            <img src={cartIcon} alt="cart icon" className="cart__icon" />
          </Link>
        </>
      </div>
    </div>
  );
};

export default RenderNavbar;
