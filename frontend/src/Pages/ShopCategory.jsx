import React from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/item'

const ShopCategory = (props) => {
  const {all_pets} = useContext(ShopContext);
  return (
    <div className='Shop-category' >
       <img src={props.banner} alt="" />
       <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 pets
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
       </div>
       <div className="shopcategory-products">
        {all_pets.map(
          (item,i)=>{
            if (props.category===Item.category) {
              return <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              /> 
            }
            else{
              return null ;
            }
          }
        )}
       </div>
    </div>
  )
}

export default ShopCategory