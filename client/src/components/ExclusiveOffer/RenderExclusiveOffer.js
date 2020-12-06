import React from "react";
import exclusive from "../../assets/images/exclusive.png";
import "./exclusiveOffer.css";

const RenderExclusiveOffer = () => {
  return (
    <>
      <div className="offer__container">
        <div className="small__container">
          <div className="row__container">
            <div className="column__one">
              <img src={exclusive} alt="exclusive" className="offer__img" />
            </div>
            <div className="column__one">
              <p>Exclusively Available Here</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLED color full-torch display with adjustable brightness, so
                everything is clear as can be.
              </small>
              <button className="buy__btn">Buy Now &#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderExclusiveOffer;
