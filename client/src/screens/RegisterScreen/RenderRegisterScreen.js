import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/image1.png";
import "./registerScreen.css";

const RenderRegisterScreen = () => {
  return (
    <div className="login__container">
      <div className="row__container">
        <div className="column__one">
          <img src={image1} alt="logo" />
        </div>

        <div className="column__one">
          <div className="form__container">
            <div className="form__btn">
              <h3>Register</h3>
              <hr id="indicator" />
            </div>

            <form id="regForm">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit" className="login__btn">
                Register
              </button>
              <p className="login__link">
                Already have an account? <Link to="/login">Login Here.</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderRegisterScreen;
