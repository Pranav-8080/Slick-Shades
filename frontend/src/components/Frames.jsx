import React from 'react'
import { useState,useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const Frames = () => {

  const [frames,setFrames] = useState()

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/shades/frames`);
      setFrames(res.data.itemArr);
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
            {frames && frames.map((i)=>(
                <ProductCard key={i.itemID} item={i} />
            ))
            }
        </main>
    </div>
  )
}

export default Frames