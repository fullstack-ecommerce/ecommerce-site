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
              <h3>Login</h3>
              <hr id="indicator" />
            </div>

            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="login__btn">
                Login
              </button>
              <div className="register__link">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register">Register Here.</Link>
                </p>
                <br />
                <Link to="#">Forgot password</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderLoginScreen;
