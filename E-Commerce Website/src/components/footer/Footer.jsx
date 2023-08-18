import React from "react";
import { BiPhoneCall, BiMap } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="container">
          <div className="footer_content">
            <div className="footer_top">
              <div className="footer_title">
                <h2>JOIN OUR NEWS LETTER</h2>
              </div>
              <div className="footer_search_box">
                <div className="footer_input">
                  <input type="text" />
                </div>
                <button className="footer_btn btn">Subcribes</button>
              </div>
            </div>
            <div className="footer_center">
              <div className="footer_center_box">
                <h2>Morat</h2>
                <p>
                  Morat is a London based Fashion brand . Join the Latest Fshion
                  trends like never before with Morat where you can buy anything
                  you please!
                </p>
                <p>Gets your order delivered at your door step !</p>
              </div>
              <div className="footer_center_box">
                <h4>Your Account</h4>
                <ul>
                  <li>
                    <NavLink>Personal info</NavLink>
                  </li>
                  <li>
                    <NavLink>Order</NavLink>
                  </li>
                  <li>
                    <NavLink>Cridit slips</NavLink>
                  </li>
                  <li>
                    <NavLink>Addresses</NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer_center_box">
                <h4>Our Company</h4>
                <ul>
                  <li>
                    <NavLink>Delivery</NavLink>
                  </li>
                  <li>
                    <NavLink>Legal Notice</NavLink>
                  </li>
                  <li>
                    <NavLink>Terms and Conditions</NavLink>
                  </li>
                  <li>
                    <NavLink>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink>Secure Payment</NavLink>
                  </li>
                  <li>
                    <NavLink>Contact us</NavLink>
                  </li>
                </ul>
              </div>

              <div className="footer_center_box">
                <h4>Producrs</h4>
                <ul>
                  <li>
                    <NavLink>Price drop</NavLink>
                  </li>
                  <li>
                    <NavLink>New Products</NavLink>
                  </li>
                  <li>
                    <NavLink>Best Sales</NavLink>
                  </li>
                  <li>
                    <NavLink>Stories</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="footer_bottom_box">
                <div className="footer_icon">
                  <BiPhoneCall className="icon" />
                </div>
                <p>
                  <NavLink>+000 956 199 660</NavLink>
                </p>
              </div>
              <div className="footer_bottom_box">
                <div className="footer_icon">
                  <TbWorldWww className="icon" />
                </div>
                <p>
                  <NavLink>www.morat.com</NavLink>
                </p>
              </div>
              <div className="footer_bottom_box">
                <div className="footer_icon">
                  <MdOutlineMail className="icon" />
                </div>
                <p>
                  <NavLink>morat@gmail.com</NavLink>
                </p>
              </div>
              <div className="footer_bottom_box">
                <div className="footer_icon">
                  <BiMap className="icon" />
                </div>
                <p>
                  <NavLink>68 street- London</NavLink>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
