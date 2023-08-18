import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartModal.css";

const CartModal = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);
  return (
    <div>
      <div className="cartModal">
        <h2>Cart Product</h2>
        <div className="body">
          {data.length > 0
            ? data.map((ele) => {
                return (
                  <>
                    <div className="card">
                      <img src={ele.image} alt="" />
                      <div className="card-body">
                        <div className="title-description">
                          <h4>{ele.name}</h4>
                          <p>{ele.description.slice(0, 20)}...</p>
                          <div className="company">
                            <span>company :</span>
                            <h4>{ele.price}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            : "No Item in Cart"}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
