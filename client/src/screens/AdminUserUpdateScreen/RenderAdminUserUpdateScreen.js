import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUser } from "../../state/actions/userActions";
import image1 from "../../assets/images/image1.png";
import "./adminUserUpdateScreen.css";
import { USER_UPDATE_RESET } from "../../state/constants/userConstants";

const RenderAdminUserUpdateScreen = () => {
  const [value, setValue] = useState({
    id: "",
    name: "",
    is_admin: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  console.log(user);

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/admin/users");
    }
    if (user) {
      const { id, username, is_admin } = user;
      setValue({ id, username, is_admin });
    }
  }, [user, dispatch, successUpdate]);

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateUser(value));
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
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
              <h3>Update User</h3>
              <hr id="indicator" />
              {loadingUpdate && <h3>Loading...</h3>}
              {errorUpdate && <h3>{error}</h3>}
            </div>

            <form onSubmit={submitHandler}>
              <label htmlFor="name">Username</label>
              <input
                type="name"
                placeholder="Username"
                value={value.username}
                name="username"
                onChange={handleChange}
              />
              <label htmlFor="email">Admin Cant Change User Email</label>
              <input
                type="text"
                placeholder="Email"
                value={user.email}
                name="email"
                readOnly
              />
              <label htmlFor="role">Is Admin</label>
              <input
                type="number"
                placeholder="Role"
                value={value.is_admin}
                name="is_admin"
                onChange={handleChange}
              />

              <button type="submit" className="login__btn">
                Update User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderAdminUserUpdateScreen;
