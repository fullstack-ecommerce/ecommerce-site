import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateUserProfile,
} from "../../state/actions/userActions";
import image1 from "../../assets/images/image1.png";
import "./userProfileScreen.css";
import { USER_UPDATE_PROFILE_RESET } from "../../state/constants/userConstants";

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

  console.log(userInfo);
  console.log(user_id);

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdateProfile;

  useEffect(() => {
    if (userInfo) {
      const { username } = userInfo;
      setUserName(username);
    }
  }, [userInfo]);

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      history.push("/");
    }
  }, [history, dispatch, successUpdate]);

  useEffect(() => {
    dispatch(getUserDetails(user_id));
  }, [dispatch, user_id]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      dispatch(updateUserProfile(user_id, username, password));
    }
  };

  return (
    <div className="login__container">
      <div className="row__container">
        <div className="column__one logo__image">
          <img src={image1} alt="logo" />
        </div>

        <div className="column__one">
          <Link to="/admin/users">
            <button>Go Back</button>
          </Link>
          <div className="form__container">
            <div className="form__btn">
              <h3>Profile</h3>
              <hr id="indicator" />
              {message && <h4>{message}</h4>}
              {loadingUpdate && <h3>Loading...</h3>}
              {errorUpdate && <h3>{errorUpdate}</h3>}
            </div>

            <form onSubmit={submitHandler}>
              <label htmlFor="name">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                name="username"
                onChange={(e) => setUserName(e.target.value)}
              />
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
                Update User
              </button>

              <button type="submit" className="login__btn">
                Delete Your Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderUserProfileScreen;
