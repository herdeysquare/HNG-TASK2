import React from "react";
import "./Checkout2.css";
import Button from "./Button";
import BlackButton from "./BlackButton";
import { useNavigate } from "react-router-dom";

const Checkout2 = () => {
  const navigate = useNavigate();

  const changeState = () => {
    navigate("/Checkout1");
  };
  const toggleState = () => {
    navigate("/Payment");
  };

  return (
    <div>
      <hr />
      <div className="out-img3"></div>

      <div className="split-screen">
        <div className="left"></div>
        
        <div className="right">
          <h3 className="payment">Payment</h3>
          <div className="right1"></div>
         
          <div className="right2"></div>
         
          <div className="buttons">
            <Button onClick={changeState} label="Back" />
            <BlackButton
              onClick={toggleState}
              label="Pay"
              className="orderagain"
            />
            
          </div>
        </div>
      </div>
      <div className="left-container">
      <div className="left1"></div>
      <div className="right11"></div>
      <h3 className="Payment">Payment</h3>
      <div id="right1a">
          <div className="right1a"></div>
         
         <div className="right1b"></div>
      </div>
    
      
      <div className="buton">
            <Button onClick={changeState} label="Back" />
            <BlackButton
              onClick={toggleState}
              label="Pay"
              className="orderagain"
            />
            
          </div>
          </div>
    </div>
  );
};

export default Checkout2;
