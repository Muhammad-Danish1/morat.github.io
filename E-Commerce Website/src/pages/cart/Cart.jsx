import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCartTotal,
  removeFromCart,
} from "../../features/CartSlice";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { setIsModalVisible, setModalData } from "../../features/Modal";
import { motion } from "framer-motion";
import FormatPrice from "../../helper/Helper";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Cart = () => {
  const dispatch = useDispatch();
  const [totalProduct, setTotalProduct] = useState(false);
  console.log(totalProduct);
  const { data, totalItems, totalAmount, deliveryCharge } = useSelector(
    (state) => state.cart
  );
  console.log(data);
  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSelector((state) => state.cart)]);

  const viewModalHandler = (data) => {
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  };

  if (data.length === 0)
    return (
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <div className="noOrder">
          <img src="./assets/Images/noOrder.jpg" alt="" />
          <h1>Oho! No Buying</h1>
          <NavLink to="/allproducts">
            <button className="btn">All Product</button>
          </NavLink>
        </div>
      </motion.div>
    );
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="cart-container">
        <div className="cart">
          <div className="left-side">
            <div className="cart-header">
              <h2>ADMIN:</h2>
              <div className="cart-title">
                <h6>BUYING PRODUCTS</h6>
                <div className="btn-group">
                  <NavLink to="/allproducts">
                    <button className="btn btn-liteBlack">Add New</button>
                  </NavLink>

                  <button
                    className="btn btn-liteBlack"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear ALL
                  </button>
                  <button
                    className="btn btn-liteBlack total"
                    onClick={() => setTotalProduct(!totalProduct)}
                  >
                    TOTAL
                  </button>
                </div>
              </div>
              <div className="search">
                <input type="text" />
                <button className="btn">Search</button>
              </div>
            </div>
            <div className="cart-body">
              <div className="cards">
                {data.map((data) => {
                  return (
                    <>
                      <div className="card" key={data.id}>
                        <img src={data.image} alt="" />
                        <div className="card-body">
                          <div className="card-title">
                            <h4>{data.name}</h4>
                            <p>{data.description.slice(0, 50)}...</p>
                            <div className="price">
                              <h4>Total Price :</h4>
                              {/* <span>{data.totalPrice}</span> */}
                              <span>
                                <FormatPrice price={data.totalPrice} />
                              </span>
                            </div>
                            <div className="quantity">
                              <h4>Quantity :</h4>
                              <span>{data.quantity}</span>
                            </div>
                          </div>
                          <div className="edit-delete">
                            <button
                              className="btn btn-white"
                              onClick={() => viewModalHandler(data)}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-white"
                              onClick={() => dispatch(removeFromCart(data.id))}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className={
              totalProduct ? "right-side show-right-side" : "right-side"
            }
          >
            <div className="totalQtyAmt">
              <div className="total">
                <h2>Total</h2>
                <div className="totalQty">
                  <h4>Total Quantity:</h4>
                  <span>{totalItems}</span>
                </div>
                <div className="totalAmt">
                  <h4>Total Amount:</h4>
                  <span>
                    <FormatPrice price={totalAmount} />
                  </span>
                </div>
                <button className="btn btn-white">CheckOut</button>
              </div>
            </div>
            <div className="filter"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
