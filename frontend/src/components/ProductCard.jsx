import React, { useContext } from 'react'
import { context } from '../App'

const ProductCard = ({item}) => {

  const {cartItems,setCartItems} = useContext(context)

  const addToCart = ()=>{
    setCartItems([...cartItems,item])
  }

  return (
    <section className="product">
    <div className="product-image">
        <img src={item.img} alt="Shades"/>
    </div>
    <div className="product-details">
        <h2>{item.Name}</h2>
        <h5>{item.itemID}</h5>
        <p>Price: {item.price}/-</p>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
    </section>
  )
}

export default ProductCard