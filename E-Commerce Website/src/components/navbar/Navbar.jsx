import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../features/ProductSlics";
import SearchModal from "../searchModal/SearchModal";
import CartModal from "../cartModal/CartModal";
import OtherModal from "../otherModal/OtherModal";
import ManModal from "../manModal/ManModal";
import { setIsModalVisible } from "../../features/Modal";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  console.log(mobileMenu);
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  // console.log(showInput);
  const { data } = useSelector((state) => state.cart);
  const setIsSearchModal = useSelector((state) => state.modal.setIsSearchModal);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    dispatch(searchProduct(searchData));
  }, [searchData]);

  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <div className="navbar_header">
            <NavLink to="/">
              <img src=".\assets\Images\MORAT LOGO (1).png" alt="" />
            </NavLink>
          </div>
          <div>
            <ul
              className={mobileMenu ? "navbar_menu mobile-menu" : "navbar_menu"}
            >
              <li>
                <Link to="/woman" onClick={() => setMobileMenu(false)}>
                  Woman
                </Link>
              </li>
              <li>
                <Link to="/kids" onClick={() => setMobileMenu(false)}>
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/man" onClick={() => setMobileMenu(false)}>
                  Man
                  <span className="modal-show">
                    <ManModal />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMobileMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link>
                  Others
                  <span className="modal-show">
                    <OtherModal />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar_link_icons">
            <div className="search_box icon">
              <input
                className={showInput ? "show" : "none"}
                onChange={(e) => setSearchData(e.target.value)}
                placeholder="Product Name.."
              />
              <AiOutlineSearch
                className="search_icon icon hover"
                onClick={() => {
                  setShowInput(!showInput);
                  setMobileMenu(false);
                }}
              />
            </div>
            <div className="profile_icon icon">
              <NavLink to="/signup" onClick={() => setMobileMenu(false)}>
                <CgProfile className="hover" />
              </NavLink>
            </div>
            <div className="cart_icon icon">
              <NavLink to="/cart" onClick={() => setMobileMenu(false)}>
                <HiOutlineShoppingCart className="hover" />
                <span>{data.length}</span>
                {/* <div className="cart-modal">
                  <CartModal />
                </div> */}
                <span className="modal-show">
                  <CartModal />
                </span>
              </NavLink>
            </div>
            <div className="setting_icon icon">
              <BsThreeDotsVertical
                className="hover"
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            </div>
          </div>
          <FaBarsStaggered
            className={mobileMenu ? "rotate bar" : "bar"}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </nav>
      </div>
      {/* <CartModal /> */}
      {setIsSearchModal === true &&
      showInput === true &&
      searchData.length > 0 ? (
        <SearchModal />
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
