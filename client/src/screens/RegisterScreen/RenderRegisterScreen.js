import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../state/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../../assets/images/image1.png";
import "./registerScreen.css";

const RenderRegisterScreen = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      dispatch(register(username, email, password));
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
              <h3>Register</h3>
              <hr id="indicator" />
            </div>
            {message && <h4>{message}</h4>}
            {error && <h4>{error}</h4>}
            {loading && <h4>Loading...</h4>}
            <form id="regForm" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
