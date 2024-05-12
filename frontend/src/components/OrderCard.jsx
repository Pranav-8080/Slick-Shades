import React from 'react'

const OrderCard = ({firstname,lastname,Name,price,img,mobile,address}) => {
  
  const username = firstname + " " + lastname

  return (
    <div>
        <div className='img-section' >
            <img src={img} alt="ordered img" />
        </div>
        <div className='info'>
            <p>Order By:{username} </p>
            <p>Name:{Name}</p>
            <p>Price: {price}</p>
            <p>Mobile Number: {mobile}</p>
            <p>Address: {address}</p>
        </div>

    </div>
  )
}

export default OrderCard