import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <header>
            <h1>Slick Shades</h1>
            <nav>
                <ul>
                    {/* <li><a href="frames.html">Frames</a></li>
                    <li><a href="sunglasses.html">Sunglasses</a></li>
                    <li><a href="main.html">Designer</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li className="sale"><a href="sale.html">Sale</a></li> */}
                    <li><Link to={'/frames'}>frames</Link></li>
                    <li><Link to={'/sunglasses'}>sunglasses</Link></li>
                    <li><Link to={'/designer'}>designer</Link></li>
                    <li><Link to={'/cart'}>cart</Link></li>
                    <li><Link to={'/login'}>login</Link></li>
                    <li><Link to={'/sale'}>sale</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header 