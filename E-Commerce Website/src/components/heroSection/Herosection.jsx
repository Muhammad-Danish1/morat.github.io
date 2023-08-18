import React from "react";
import "./HeroSection.css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { banner } from "../../utilities/Data";

const Herosection = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        duration: 4,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {banner.map((user) => {
        console.log(user.img);
        return (
          <>
            <SwiperSlide key={user.id}>
              <div className="container">
                <header className="header">
                  <div className="left_side">
                    <div className="hero_content">
                      <h2>Step up your</h2>
                      <h1>FASHION GAME!</h1>
                      <p>
                        upto 50% off <br /> on entire stock
                      </p>
                      <NavLink to="/allproducts">
                        <button className="btn hero_btn">SHOP NOW</button>
                      </NavLink>
                    </div>
                  </div>
                  <div className="right_side">
                    <img src={user.img} alt="" />
                  </div>
                </header>
              </div>
            </SwiperSlide>
            ;
          </>
        );
      })}
    </Swiper>
  );
};

export default Herosection;
