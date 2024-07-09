import React from "react";
import banner from "../images/Banner.png";
import "./Home.css";
import CategoryCard1 from "../images/CategoryCard1.png";
import CategoryCard2 from "../images/CategoryCard2.png";
import CategoryCard3 from "../images/CategoryCard3.png";
import CategoryCard4 from "../images/CategoryCard4.png";
import image64 from "../images/image64.png";
import image41 from "../images/image41.png";
import ceilingfit from "../images/ceilingfit.png";
import button from "../images/Button.png";
import banner2 from "../images/Banner2.png";
import radio from '../images/radio.png';
import {useNavigate} from 'react-router-dom'

const Home = () => {
const navigate = useNavigate();



const changeState = () => {
navigate ("./ProductCategory")}


  return (
    <div>
      <div id="banner"></div>

      <div id="arrow">
        <h4 className="shop">Shop By Category</h4>
        <p className="arr"><strong>‹ ›</strong></p>
      </div>

      <div className="container">
        <div className="containercard containercard1" onClick={changeState}/>
        <div className="containercard containercard2" onClick={changeState}/>
        <div className="containercard containercard3" onClick={changeState}/>
        <div className="containercard containercard4 lastcard" onClick={changeState}/>
      </div>

      <div id="new">
        <h5 className="new">New In</h5>
      </div>

      <div className="grid-container">
        <span className="box box1">
          <img src={image64} alt="" id="box1" />
          <h3 className="text bigtext">Outdoor Lights</h3>
          <p className="text p-text">
            Durable outdoor light with a weather-resistant design, ideal for
            illuminating patios and garden areas.
          </p>
          <img src={button} alt="" className="button" onClick={changeState} />
        </span>

        <span className="box box2">
          <img src={image41} alt="" id="box2" />
          <h3 className="text bigtext">Track Lights</h3>
          <p className="text p-text">
            Adjustable LED track light with a modern finish, perfect for
            versatile and energy-efficient illumination.
          </p>
          <img src={button} alt="" className="button" onClick={changeState}/>
        </span>

        <span className="box box3">
          <img src={ceilingfit} alt="" id="box3" />
          <h3 className="text bigtext">Ceiling Fittings</h3>
          <p className="text p-text">
            Elegant ceiling fitting light with a sleek design, providing bright
            and stylish illumination for any room.
          </p>
          <img src={button} alt="" className="button" onClick={changeState} />
        </span>
      </div>

      <div className="radio">
     <img src={radio} alt="" />
      </div>

      <div id="footer">
        <div id="banner2" />
      </div>
    </div>
  );
};

export default Home;
