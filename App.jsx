import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/cart/Cart'
import PlaceOrder from './components/pages/placeOrder/PlaceOrder'
import LoginPopup from './components/loginpopup/LoginPopup'
import Footer from './components/footer/Footer'

function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
   <>
   {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
   <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart'element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
    </div>
   </>
  )
}

export default App
