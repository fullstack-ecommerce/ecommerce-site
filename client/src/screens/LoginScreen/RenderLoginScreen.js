import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/image1.png";
import "./loginScreen.css";

const RenderLoginScreen = () => {
  return (
    <div className="login__container">
      <div className="row__container">
        <div className="column__one">
          <img src={image1} alt="logo" />
        </div>

        <div className="column__one">
          <div className="form__container">
            <div className="form__btn">
              <span>Login</span>
              <span>Register</span>
              <hr id="indicator" />
            </div>

            <form id="loginForm">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="login__btn">
                Login
              </button>
              <p>
                Don't have an account?{" "}
                <Link to="/register">Register Here.</Link>
              </p>
              <br />
              <a href="">Forgot password</a>
            </form>

            <form id="regForm">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit" className="login__btn">
                Register
              </button>
              <p>
                Already have an account? <Link to="/login">Login Here.</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderLoginScreen;
