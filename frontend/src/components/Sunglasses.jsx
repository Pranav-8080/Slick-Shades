import React, { useState ,useEffect} from 'react'
import axios from "axios"
import ProductCard from './ProductCard'

const Sunglasses = () => {

  const [SunGlasses,setSunglasses] = useState()

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/shades/sunglasses`);
      setSunglasses(res.data.itemArr);
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
            {SunGlasses && SunGlasses.map((i)=>(
                <ProductCard key={i.itemID} item={i}/>
            ))}
        </main>   
    </div>
  )
}

export default Sunglasses