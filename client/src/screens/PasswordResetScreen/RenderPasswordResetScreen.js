import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { resetPassword } from "../../state/actions/userActions";
import { USER_RESET_PASSWORD_RESET } from "../../state/constants/userConstants";

import image1 from "../../assets/images/image1.png";
import "./passwordResetScreen.css";

const RenderPasswordResetScreen = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams();
 
  const dispatch = useDispatch();
  const history = useHistory();

  const userResetPassword = useSelector((state) => state.userResetPassword);
  const { loading, error, success, message: resetMessage } = userResetPassword;

  useEffect(() => {
    if (success) {
      window.confirm("Password Reset!");
      history.push("/login");
      dispatch({ type: USER_RESET_PASSWORD_RESET });
    }
  }, [history, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      dispatch(resetPassword(password, id));
    }
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
              <h3>Reset Password</h3>
              <hr id="indicator" />
              {message && <h4>{message}</h4>}
              {loading && <h3>loading...</h3>}
            </div>

            <form onSubmit={submitHandler}>
              <label htmlFor="password">Enter your new password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
export default RenderPasswordResetScreen;
