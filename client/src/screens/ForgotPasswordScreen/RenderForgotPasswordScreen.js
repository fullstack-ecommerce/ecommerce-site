import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { forgotPassword } from "../../state/actions/userActions";
import { USER_FORGOT_PASSWORD_RESET } from "../../state/constants/userConstants";

import image1 from "../../assets/images/image1.png";
import "./forgotPasswordScreen.css";

const RenderForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const userForgotPassword = useSelector((state) => state.userForgotPassword);
  const { loading, error, success, message } = userForgotPassword;

  useEffect(() => {
    if (success) {
      window.confirm("Email sent!");
      history.push("/login");
      dispatch({ type: USER_FORGOT_PASSWORD_RESET });
    }
  }, [history, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(email));
  };

  return (
    <div className="login__container">
      <div className="row__container">
        <div className="column__one logo__image">
          <img src={image1} alt="logo" />
        </div>

        <div className="column__one">
          <div className="form__container">
            <div className="form__btn">
              <h3>Forgot Password</h3>
              <hr id="indicator" />
              {error && <h6>{error}</h6>}
              {loading && <h3>loading...</h3>}
            </div>

            <form onSubmit={submitHandler}>
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit" className="login__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderForgotPasswordScreen;
