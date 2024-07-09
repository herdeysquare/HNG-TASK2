import React from "react";
import "./HeaderTop.css";
import person from "../images/person.png";
import heart from "../images/heart.png";
import cart from "../images/cart.png";
import hamburger from "../images/hamburger.png";
import { Navigate, useNavigate } from "react-router-dom";

const HeaderTop = () => {
const navigate = useNavigate()


const changeState = () =>{
  navigate("./")
}
const toggle = () =>{
  navigate("/Cart")
}



  return (
    <div className="nav">
      <h2>IFYTHEL LIGHTS</h2>
      <div className="ham"><img src={hamburger} alt="" className="ham"/></div>
      <span className="info">
        <div className="searchfield">
          <input type="text" className="search-input" placeholder="Search" />
        </div>

        <ul>
          <li>
            <strong onClick={changeState} className="header-home">Home</strong>
          </li>
          <li className="list">About</li>
          <li className="list">Contact Us</li>
        </ul>
        <div className="iconfield">
          <img src={heart} alt="" className="icon" />
          <img src={cart} alt="" className="icon icon-cart" onClick={toggle}/>
          <img src={person} alt="" className="icon" />
        </div>
        
      </span>
    </div>
  );
};

export default HeaderTop;
