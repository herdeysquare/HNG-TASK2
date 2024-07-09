import React from "react";
import "./ProductCategory.css";
import Card from "./Card";
import light from "../images/light.png";
import light1 from "../images/light1.png";
import light2 from "../images/light2.png";
import light3 from "../images/light3.png";
import light4 from "../images/light4.png";
import light5 from "../images/light5.png";
import light6 from "../images/light6.png";
import pagination from "../images/Pagination.png";
import ceiling from "../images/ceilingfit.png";
import { useNavigate } from "react-router-dom";

const ProductCategory = () => {
  const navigate = useNavigate();

  const toggle = () => {
    navigate("/");
  };

  const changeState = () =>{
    navigate("/Cart")
}
  return (



    <div>
      <hr />
      <div id="top">
        <p className="top"></p>
        <p className="mobile-top"></p>
        <p className="topPart"></p>
      </div>
      <p className="mobileTopPart">Result: 18</p>

      <div className="card-container">
        <Card
          imageSrc={light}
          onClick={toggle}
          productName="Crystal Chandelier"
          productPrice="₦ 190,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          imageSrc={light1}
          onClick={toggle}
          productName="Dropping Chandelier Wall Led Light"
          productPrice="₦ 39,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          imageSrc={light2}
          onClick={toggle}
          productName="Chandelier, Pendant, Dropping Lighting"
          productPrice="₦ 57,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          imageSrc={light3}
          onClick={toggle}
          productName="Chandelier, Pendant, Dropping Lighting"
          productPrice="₦ 54,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          imageSrc={light4}
          onClick={toggle}
          productName="Elizebeth Layered Two-Tier Crystal Chandelier"
          productPrice="₦ 540,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          imageSrc={light5}
          onClick={toggle}
          productName=" Steel chandelier, lightings, dropping, pendant light"
          productPrice="₦ 34,999"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          imageSrc={ceiling}
          onClick={toggle}
          productName="LED Multi color Chandelier"
          productPrice="₦ 140,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          imageSrc={light}
          onClick={toggle}
          productName="Dropping Pendant Wall Led Light."
          productPrice="₦ 260,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          id="lastlight"
          imageSrc={light6}
          onClick={toggle}
          productName="LED Chandelier"
          productPrice="₦ 160,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />
      </div>
      <img src={pagination} alt="" className="pagination" />
    </div>
  );
};

export default ProductCategory;
