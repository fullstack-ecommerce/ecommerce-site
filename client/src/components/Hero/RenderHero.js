import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/image1.png";
import "./hero.css";

const RenderHero = () => {
  return (
    <div className="home__container">
      <div className="column__one">
        <h1>
          Give Your Workout
          <br /> A New Style!
        </h1>
        <p>
          Success isn't always about greatness. It's about consistency.
          Consistent
          <br /> hard work gains success. Greatness will come.
        </p>
        <Link to="/products">
          <button className="explore__button">Explore Now &#8594;</button>
        </Link>
      </div>

      <div className="column__one">
        <img src={image1} alt="logo" />
      </div>
    </div>
  );
};

export default RenderHero;
