import React from 'react'
import './Checkout1.css'
import BlackButton from './BlackButton'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Checkout1 = () => {
    const navigate = useNavigate();
      
    const changeState = () => {
      navigate("/Cart");
    };
    const toggleState = () => {
        navigate("/Checkout2");
      };
  return (
    <div>
        <hr />
        <div className='out-img1'></div>
        <div className='out-img2'></div>  
        <h3 className='order-sum add'>Add New Address</h3>  
        <div className='buttons1'> 
    <Button  onClick={changeState}  label="Back"/>
    <BlackButton onClick={toggleState} label="Next" className="orderagain"/>
    </div>
    </div>
    
  )
}

export default Checkout1