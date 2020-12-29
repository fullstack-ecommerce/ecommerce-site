import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateUserProfile,
  updateUserPassword,
} from "../../state/actions/userActions";
import "./userProfileScreen.css";
import {
  USER_UPDATE_PASSWORD_RESET,
  USER_UPDATE_PROFILE_RESET,
} from "../../state/constants/userConstants";

const RenderUserProfileScreen = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { user_id } = userInfo;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdateProfile;

  const userUpdatePassword = useSelector((state) => state.userUpdatePassword);
  const {
    loading: loadingPassword,
    error: errorPassword,
    success: successPassword,
  } = userUpdatePassword;

  useEffect(() => {
    if (userInfo) {
      const { username } = userInfo;
      setUserName(username);
    }
  }, [userInfo]);

  useEffect(() => {
    if (successUpdate) {
      window.confirm("Username Successfully Updated!");
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
    }
    if (successPassword) {
      window.confirm("Password Successfully Changed!");
      dispatch({ type: USER_UPDATE_PASSWORD_RESET });
    }
  }, [history, dispatch, successUpdate, successPassword]);

  useEffect(() => {
    dispatch(getUserDetails(user_id));
  }, [dispatch, user_id]);

  const submitUserNameHandler = (e) => {
    e.preventDefault();

    dispatch(updateUserProfile(username));
  };

  const submitPasswordHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      dispatch(updateUserPassword(password));
    }
  };

  return (
    <div className="login__container">
      <div className="row__container">
        <div className="column__one logo__image">
          <div className="form__container">
            <div className="form__btn">
              <h3>Update Username</h3>
              <hr id="indicator" />
              {message && <h4>{message}</h4>}
              {loadingUpdate && <h3>Loading...</h3>}
              {errorUpdate && <h3>{errorUpdate}</h3>}
            </div>

            <form onSubmit={submitUserNameHandler}>
              <label htmlFor="name">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                name="username"
                onChange={(e) => setUserName(e.target.value)}
              />

              <button type="submit" className="login__btn">
                Update Username
              </button>
            </form>
          </div>
        </div>

        <div className="column__one">
          <Link to="/admin/users">
            <button>Go Back</button>
          </Link>
          <div className="form__container">
            <div className="form__btn">
              <h3>Change Password</h3>
              <hr id="indicator" />
              {message && <h4>{message}</h4>}
              {loadingPassword && <h3>Loading...</h3>}
              {errorPassword && <h3>{errorPassword}</h3>}
            </div>

            <form onSubmit={submitPasswordHandler}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button type="submit" className="login__btn">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderUserProfileScreen;
