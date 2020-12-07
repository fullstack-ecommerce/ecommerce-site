import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/images/logoWhite.png";
import playStore from "../../assets/images/playStore.png";
import appStore from "../../assets/images/appStore.png";
import "./footer.css";

const RenderFooter = () => {
  return (
    <div className="footer__container">
      <div className="list__container">
        <div className="row__container">
          <div className="footer__column__1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className="logo__container">
              <img src={playStore} alt="play store" />
              <img src={appStore} alt="play store" />
            </div>
          </div>

          <div className="footer__column__2">
            <img src={logoWhite} alt="logo" />
            <p>
              Our Purpose is to Sustainably Make the Pleasure and Benefits of
              Sports Accessible to the Many.
            </p>
          </div>

          <div className="footer__column__3">
            <h3>Useful Links</h3>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/return">Return Policy</Link>
            <Link to="/affiliate">Join Affiliate</Link>
          </div>

          <div className="footer__column__4">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
        <hr />
        <p className="copy__right">
          Copyright &copy; Anthony Amaro & Sone Thaya
        </p>
      </div>
    </div>
  );
};

export default RenderFooter;
