import React, { useContext } from 'react'
import './fooddisplay.css'
import { StoreContext } from '../StoreContext'
import FoodItem from '../foodItem/FoodItem'

function FoodDisplay({category}) {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes for you</h2>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                    if(category==="All" || category===item.category){
                        return <FoodItem key={index}  
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            deliveryTime={item.deliveryTime} 
                             />
                                                

                    }

                })
            }
        </div>
      
    </div>
  )
}

export default FoodDisplay
