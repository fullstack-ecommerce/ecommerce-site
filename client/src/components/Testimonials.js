import React from "react";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial__container">
        <div className="small__container">
          <div className="row__container">
            <div className="column__two">
              <i class="fas fa-quote-left"></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text forever.
              </p>
              <div className="rating__stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <img src={user1} alt="user 1" />
              <h3>Sara Parker</h3>
            </div>

            <div className="column__two">
              <i class="fas fa-quote-left"></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text forever.
              </p>
              <div className="rating__stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <img src={user2} alt="user 2" />
              <h3>Billy Anderson</h3>
            </div>

            <div className="column__two">
              <i class="fas fa-quote-left"></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text forever.
              </p>
              <div className="rating__stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <img src={user3} alt="user 3" />
              <h3>Becky Morris</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
