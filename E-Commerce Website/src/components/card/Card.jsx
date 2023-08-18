import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Card.css";
import { useDispatch } from "react-redux";
import { setIsModalVisible, setModalData } from "../../features/Modal";
import FormatPrice from "../../helper/Helper";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.05,
  },
};

const Card = ({ data }) => {
  console.log(data);
  const dispatch = useDispatch();
  const viewModalHandler = (data) => {
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  };

  return (
    <>
      {data.map((element, index) => {
        console.log(data);
        return (
          <motion.div
            variants={itemVariants}
            className="card-box"
            key={index}
            onClick={() => {
              viewModalHandler(element);
            }}
          >
            <div className="img-div">
              <img src={element.image} alt="kk" />
            </div>
            <div className="card-content">
              <div className="card-tilte">
                <p>{element.name}</p>
                <div className="star-icon">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>
              </div>
              <div className="price">
                <span>
                  <FormatPrice price={element.price} />
                </span>
                <div className="card-cart">
                  <p>Add to Cart</p>
                  <HiOutlineShoppingBag className="icon" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Card;
