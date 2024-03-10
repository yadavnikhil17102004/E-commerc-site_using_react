import React, { useState } from 'react';
import "./Navbar.css"
import logo from "../Assets/logo0.svg"
import cart_logo from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div class="navbar" >
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>Boki</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}} to='/' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}} ><Link style={{textDecoration:'none'}} to='/men' >Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}} ><Link style={{textDecoration:'none'}} to='/women' >Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} ><Link style={{textDecoration:'none'}} to='/kids' >Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'>
            <button>login</button>
            </Link>
            <Link to='/cart' >
            <img src={cart_logo} alt="cart-logo" />
            </Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
