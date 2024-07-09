import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HeaderTop from './Components/HeaderTop'
import Home from './Components/Home'
import Footer from './Components/Footer'
import './App.css'
import ProductCategory from './Components/ProductCategory'
import Payment from './Components/Payment'
import ProductDescription from './Components/ProductDescription'
import Cart from './Components/Cart'
import EmptyCart from './Components/EmptyCart'
import Checkout1 from './Components/Checkout1'
import Checkout2 from './Components/Checkout2'

const App = () => {
  return (<div>
    <HeaderTop/>
    {/* <Payment/> */}
    {/* <ProductDescription/> */}
   
   <Routes>
     <Route path="/ProductCategory" element={<ProductCategory />} />
      <Route path="/" element={<Home />} />
      <Route path="/ProductDescription" element={<ProductDescription />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/EmptyCart" element={<EmptyCart />} />
      <Route path="/Checkout1" element={<Checkout1/>} />
      <Route path="/Checkout2" element={<Checkout2/>} />
      <Route path="/Payment" element={<Payment/>} />
   </Routes>
   <Footer/>
   </div>
  )
}

export default App