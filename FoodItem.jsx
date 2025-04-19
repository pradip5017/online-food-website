import React, { useContext, useState } from 'react'
import './fooditem.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { StoreContext } from '../StoreContext';


function FoodItem({id,name,price,description,image,deliveryTime}) {
  const {cartItems,setCartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt=''/>
            {
              !cartItems[id]
              ?<MdOutlineAdd  className='add' onClick={()=>addToCart(id)}/>
              :
              <div className="food-item-counter">
<FaMinus  onClick={()=>removeFromCart(id)} />

<p>{cartItems[id]}</p>
<IoMdAdd  onClick={()=>addToCart(id)}/>
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <div>{name}</div>
               <div>4.4 <FaStarHalfAlt style={{fontSize:"13px"}} /></div>
                
            </div>
            <p className="food-item-desc">{description}</p>
            <div className="food-item-price-time">
            <p className="food-item-price"> &#x20B9; <b>{price}</b> for one</p>
            <p className="food-item-deliveryTime">{deliveryTime}</p>
            </div>
        </div>
      
    </div>
  )
}

export default FoodItem

