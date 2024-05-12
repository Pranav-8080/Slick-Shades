import React, { useContext , useEffect} from 'react'
import { context } from '../App'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const add = async()=>{
    await axios.get(`${import.meta.env.VITE_SERVER_URL}/shades/add`)
  }
  const navigate = useNavigate()
  const {cartItems,setCartItems} = useContext(context)

  const clearCart = ()=>{
    setCartItems([])
  }

  useEffect(() => {
    console.log(cartItems)

  }, [cartItems])
  
  return (
    <div>
    <main>
        <section className="cart-items">
            <h2>Cart Items</h2>            
            <button id="clearCartBtn" onClick={clearCart}>Clear Cart</button>
            <button id="Chkoutbutton" onClick={()=>navigate("/checkout")}>Check Out</button>
            <button onClick={add}>add</button>
            <ul id="cartList">
               {cartItems && cartItems.map((i)=>(
                <CartItem item={i}/>
               ))}
            </ul>

        </section>
    </main>
    </div>
  )
}

export default Cart