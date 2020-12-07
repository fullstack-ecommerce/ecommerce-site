import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../state/actions/userActions";

import image1 from "../../assets/images/image1.png";
import "./loginScreen.css";

const RenderLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  //const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
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
              <h3>Login</h3>
              <hr id="indicator" />
              {error && <h6>{error}</h6>}
              {loading && <h3>loading...</h3>}
            </div>

            <form onSubmit={submitHandler}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="login__btn">
                Login
              </button>
              <div className="register__link">
                <p>
                  Don't have an account?{" "}
                  <Link to={"/register"}>Register Here.</Link>
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
