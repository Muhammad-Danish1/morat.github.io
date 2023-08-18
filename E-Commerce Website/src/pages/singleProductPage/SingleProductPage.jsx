import React, { useState } from "react";
import "./SingleProductPage.css";
import { RxCross2 } from "react-icons/rx";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";
import { setIsModalVisible, setIsSearchModal } from "../../features/Modal";
import { motion } from "framer-motion";
import { FiTruck } from "react-icons/fi";
import { FaReplyd } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";

const routeVariants = {
  hidden: {
    scale: 0.5,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      duration: 0.9,
    },
  },
  exit: {
    scale: 0.5,
  },
};
const SingleProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const data = useSelector((state) => state.modal.data);
  console.log(data);
  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  const addToCartHandler = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    console.log(tempProduct);
    dispatch(addToCart(tempProduct));
    dispatch(setIsModalVisible(false));
    dispatch(setIsSearchModal(true));
    navigate("/cart");
  };
  return (
    <motion.div
      variants={routeVariants}
      initial="hiddena"
      animate="visible"
      exit="exit"
    >
      <div className="overlay-bg">
        <div className="product-details-modal">
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => {
              dispatch(setIsModalVisible(false));
              dispatch(setIsSearchModal(true));
            }}
          >
            <RxCross2 />
          </button>
          <div className="details-content">
            <img src={data.image} alt="" />
            <div className="product-details">
              <h3 className="title">{data.name.toUpperCase()}</h3>
              <p className="description">{data.description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <FiTruck className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <FaReplyd className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <FiTruck className="warranty-icon" />
                  <p>Thapa Delivered </p>
                </div>

                <div className="product-warranty-data">
                  <GrShieldSecurity className="warranty-icon" />
                  <p>2 Year Warranty </p>
                </div>
              </div>
              <div className="product-data-info">
                <div className="product-info">
                  Price:
                  <span> {data.price}</span>
                </div>
                <div className="product-info">
                  Company : <span>{data.company}</span>
                </div>
                <div className="product-info">
                  Category: <span>{data.category}</span>
                </div>
              </div>

              <div className="qty">
                <span className="qty-text">Qty: </span>
                <div className="qty-change">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => increaseQty()}
                  >
                    +
                  </button>
                  <span className="qty-value">{qty}</span>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => decreaseQty()}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="btn addtocart-btn"
                onClick={() => addToCartHandler(data)}
              >
                <span className="btn-icon">
                  <BsFillCartFill />
                </span>
                <span className="btn-text">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProductPage;
