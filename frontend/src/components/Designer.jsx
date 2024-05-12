import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const Designer = () => {

  const [designer,setDesigner] = useState()

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/shades/designer`);
      setDesigner(res.data.itemArr);
      console.log(res.data.itemArr)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    fetchData()
    
  }, [])

  return (
    <div>
        <main>
        {designer && designer.map((i)=>(
                <ProductCard key={i.itemID} item={i} />
            ))
        }
        </main>
    </div>
  )
}

export default Designer