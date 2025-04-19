import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/image/Assets'
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { StoreContext } from '../StoreContext';

function Navbar({setShowLogin}) {
    const [menu,setMenu]=useState("home")

    const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</li>
        </ul>
        <div className="navbar-right">
        <IoSearch />
      <Link to='/cart'>  
      <div className="navbar-search-icon">
        <FaBasketShopping />
        <div className={getTotalCartAmount()===0?"":"dot"} ></div>
        </div></Link>
<button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar
