import React from 'react'

const OrderCard = ({firstname,lastname,img,mobile,address}) => {
  return (
    <div style={{border:"1px solid black",display:"flex"}}>
        <div className='img-section'>
            <img src={img} alt="ordered img" />
        </div>
        <div className='info'>
            Order By:{firstname+" "+lastname} 
            Mobile Number: {mobile}
            Address: {address}
        </div>

    </div>
  )
}

export default OrderCard