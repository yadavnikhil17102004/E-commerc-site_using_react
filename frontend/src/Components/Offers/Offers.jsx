import React from 'react'
import "./Offers.css"
import Exclusive_image from '../Assets/Exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers' >
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={Exclusive_image} alt='' />
        </div>
    </div>
  )
}

export default Offers