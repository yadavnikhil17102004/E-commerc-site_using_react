import React, { useState } from 'react';
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_logo from "../Assets/cart_icon.png"

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div class="navbar" >
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>Shopeee</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}} >shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}} >men{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}} >women{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} >kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>login</button>
            <img src={cart_logo} alt="cart-logo" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
