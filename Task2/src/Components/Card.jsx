import React from 'react';
import './Card.css';
import BlackButton from './BlackButton';
import heart from '../images/heart.png';
import { useNavigate } from 'react-router-dom';

const Card = ({ imageSrc, onImgClick, productName, productPrice, onButtonClick, buttonLabel}) => {

  const navigate = useNavigate()


  const toggle =() => {
    navigate("/ProductDescription")}
  

  return (
    <div className="product-card">
      <img src={heart} alt="heart" className='heart'/>
      <img src={imageSrc} alt={productName} className="product-image"  onClick={toggle}/>
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">{productPrice}</p>
      <BlackButton onClick={onButtonClick} label={buttonLabel} />
    </div>
  );
};

export default Card;
