import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OrderCard from './OrderCard'
import { lastname } from './CheckOutForm'

const MyOrders = () => {

  const [MyOrders,setMyOrders] = useState([])
  const [orderItems,setOrderItems] = useState([])
  console.log(lastname)

  const fetchData = async()=>{
    if(lastname){
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/orders/myorders`, { lastname });
        console.log("myorders",response.data.myOrders);
        console.log("oderitems:",response.data.myOrders[0].cartItems)
        setMyOrders(response.data.myOrders);
        setOrderItems(response.data.myOrders[0].cartItems)

      } catch (error) {
        console.log(error);
      }
      
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
        <main>
            {orderItems && orderItems.map((i)=>(
              <OrderCard key={i.itemID} firstname={MyOrders[0].firstName} lastname={MyOrders[0].lastName} Name={i.Name} price={i.price} img={i.img} mobile={MyOrders[0].mobileNumber} address={MyOrders[0].address}/>
         
            ))}


        </main>
      
    </div>
  )
}

export default MyOrders