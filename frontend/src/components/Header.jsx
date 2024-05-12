import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <header>
            <h1>Slick Shades</h1>
            <nav>
                <ul>
                    <li><Link to={'/frames'}>frames</Link></li>
                    <li><Link to={'/sunglasses'}>sunglasses</Link></li>
                    <li><Link to={'/designer'}>designer</Link></li>
                    <li><Link to={'/cart'}>cart</Link></li>
                    <li><Link to={'/login'}>login</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header 