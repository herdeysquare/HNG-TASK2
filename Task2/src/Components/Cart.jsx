import React from "react";
import Block from "../images/Block.png";
import Content from "../images/Content.png";
import "./Cart.css";
import BlackButton from "./BlackButton";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const toggleState = () => {
    navigate("/Checkout1");
  };

  const toggle = () => {
    navigate("/ProductCategory");
  };

  return (
    <div>
      <hr />
      <div className="back-arrow" onClick={toggle}>
        ‹
      </div>
      <div id="cart-content">
        <div src="" alt="" className="cart-content" />
      </div>
      
      <div id="order-box">
        <h3 className="order-sum">Order Summary</h3>
        <div className="cart-block" />
        <div id="checkout-b">
          <BlackButton onClick={toggleState} label="Checkout" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
