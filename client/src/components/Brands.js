import React from "react";
import logoGodrej from "../assets/images/logoGodrej.png";
import logoOppo from "../assets/images/logoOppo.png";
import logoCocaCola from "../assets/images/logoCocaCola.png";
import logoPaypal from "../assets/images/logoPaypal.png";
import logoPhilips from "../assets/images/logoPhilips.png";
import "./brands.css";

const Brands = () => {
  return (
    <>
      <div className="brands__container">
        <div className="small__container">
          <div className="row__container">
            <div className="column__four">
              <img src={logoGodrej} alt="logo godrej" />
            </div>
            <div className="column__four">
              <img src={logoOppo} alt="logo oppo" />
            </div>
            <div className="column__four">
              <img src={logoCocaCola} alt="logo godrej" />
            </div>
            <div className="column__four">
              <img src={logoPaypal} alt="logo godrej" />
            </div>
            <div className="column__four">
              <img src={logoPhilips} alt="logo godrej" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
