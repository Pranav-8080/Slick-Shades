import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OrderCard from './OrderCard'

const MyOrders = () => {

  const [MyOrders,setMyOrders] = useState()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/`)
  }, [])
  
  return (
    <div>
        <main>
            <OrderCard />
        </main>
    </div>
  )
}

export default MyOrders