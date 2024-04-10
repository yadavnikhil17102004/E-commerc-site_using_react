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
            <Link to="/">
            <img src={logo} alt="logo" />
            </Link>
            <p>Boki</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}} to='/' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("dogs")}} ><Link style={{textDecoration:'none'}} to='/dogs' >Dogs</Link>{menu==="dogs"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cats")}} ><Link style={{textDecoration:'none'}} to='/cats' >Cats</Link>{menu==="cats"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("babies")}} ><Link style={{textDecoration:'none'}} to='/babies' >Babies</Link>{menu==="babies"?<hr/>:<></>}</li>
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
