import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../state/actions/userActions";
import image1 from "../../assets/images/image1.png";
import "./adminUserUpdateScreen.css";

const RenderAdminUserUpdateScreen = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    is_admin: "",
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  console.log(user);

  useEffect(() => {
    if (user) {
      const { username, email, is_admin } = user;
      setValue({ username, email, is_admin });
    }
  }, [user]);

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const submitHandler = (e) => {
    e.preventDefault();
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
              {loading && <h3>Loading...</h3>}
              {error && <h3>{error}</h3>}
            </div>

            <form onSubmit={submitHandler}>
              <label htmlFor="name">Username</label>
              <input
                type="name"
                placeholder="Username"
                value={value.username}
                name="name"
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                value={value.email}
                name="email"
                onChange={handleChange}
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
