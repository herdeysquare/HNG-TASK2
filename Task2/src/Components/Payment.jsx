import React from 'react'
import './payment.css'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import BlackButton from './BlackButton';


const Payment = () => {
            const navigate = useNavigate();
      
        const changeState = () => {
          navigate("/");
        };
        const toggleState = () => {
            navigate("/EmptyCart");
          };


  return (
    <div>
        <hr />
        <h4><strong className='confirm'>Payment Confirmation</strong></h4>
        <div className='check-img'>
        <div className='checkmark'/>
        </div>
        <div className='buttons'> 
        <Button  onClick={changeState}  label="Back to Home"/>
        <BlackButton onClick={toggleState} label="Order Again" className="orderagain"/>
        </div>
    </div>
  )
}

export default Payment