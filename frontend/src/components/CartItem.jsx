import React from 'react'

const CartItem = ({item}) => {
  return (
    <section className="product">
    <div className="product-image">
        <img src={item.img} alt="Gucci"/>
    </div>
    <div className="product-details">
        <h2>{item.Name}</h2>
        <h5>{item.itemID}</h5>
        <p>Price: {item.price}/-</p>
    </div>
    </section>
  )
}

export default CartItem