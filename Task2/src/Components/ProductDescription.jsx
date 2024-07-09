import React from 'react'
import moveon from '..//images/moveonmahn.png'
import image from '../images/Images.png'
import './ProductDescription.css'
import info from '../images/Info.png'
import Details from '../images/Details.png'
import Card from './Card'
import light2 from "../images/light2.png";
import light3 from "../images/light3.png";
import { useNavigate } from 'react-router-dom'

const ProductDescription = () => {
    const navigate = useNavigate();



    const changeState = () =>{
        navigate("/Cart")
    }
    const toggle = () => {
        navigate("/ProductCategory");
      }



  return (
    <div id PD>
        <hr />
        <img src={moveon} alt="" className='desc' />
        <div className='back-arrow' onClick={toggle}>‹</div>
        <div id='dp-image'>
        <div className='dp-image' />
        </div>
       
        <div className='pd-info'/>
        <div className='info-details' />
       
        <h3 id='related'>Related Products</h3>
       <div className='related'>
        <Card
          imageSrc={light2}
          productName="Chandelier, Pendant, Dropping Lighting"
          productPrice="₦ 57,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />

        <Card
          imageSrc={light3}
          productName="Chandelier, Pendant, Dropping Lighting"
          productPrice="₦ 54,000"
          onButtonClick={changeState}
          buttonLabel="Add To Cart"
        />
        
       </div>
    </div>
  )
}

export default ProductDescription