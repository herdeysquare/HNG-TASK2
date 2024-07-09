import React from 'react'
import './payment.css'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import BlackButton from './BlackButton';
import './EmptyCart.css'


const EmptyCart = () => {
            const navigate = useNavigate();
      
       
        const toggleState = () => {
            navigate("/ProductCategory");
          };


  return (
    <div>
        <hr />
        <h4><strong className='confirm'>Payment Confirmation</strong></h4>
        <div className='emptycart-img'>
        <div className='emptycart'/>
        </div>
        <h3 className='no-cart'>NO ITEM IN YOUR CART</h3>
        <p className='cart-click'>PLEASE CLICK ON THE BUTTON TO START SHOPPING</p>
        <div className='buttons'> 
       
        <BlackButton onClick={toggleState} label="Shop Now" className="orderagain"/>
        </div>
    </div>
  )
}

export default EmptyCart;