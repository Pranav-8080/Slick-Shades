import express from "express"
import {Shade} from "../models/shades.js"

const router = express()

router.get("/add",async(req,res)=>{
    console.log("test")
    const item = await Shade.create([
        {
         
            Name: 'Gold Black',
            img: 'https://tse3.mm.bing.net/th?id=OIP.sAizPsZom58t6rSNof3xdAHaDj&pid=Api&P=0&h=180',
            itemID: 'GB 012',
            price: '1,999',
            category: 'casual',
    
          },
          {
          
            Name: 'Blue Eyeglasses',
            img: 'https://tse3.mm.bing.net/th?id=OIP.4UFMM29vSutaHjxtE1UyoQHaDj&pid=Api&P=0&h=180',
            itemID: 'BL 196',
            price: '1,799',
            category: 'casual',
          
          },
          {
        
            Name: 'Bluecut crystal',
            img: 'https://tse2.mm.bing.net/th?id=OIP.bpS-dQoAFF3OuHic3VyyPgHaDj&pid=Api&P=0&h=180',
            itemID: 'BC 011',
            price: '1,299',
            category: 'casual',
   
          },
          {
 
            Name: 'JJ Acetate',
            img: 'https://cdn.shopify.com/s/files/1/0047/5335/8922/files/Eround_09281714-795c-4acf-9783-944456b4ef95.png?v=1654591707',
            itemID: 'JJ 3291',
            price: '5,600',
            category: 'sunglasses',
       
          },
          {
            
            Name: 'Vincent Chase Blue',
            img: 'https://tse1.mm.bing.net/th?id=OIP.YDyZEiQoKp2FJZcwOtEt5QHaDj&pid=Api&P=0&h=180',
            itemID: 'VC 1029',
            price: '3,699',
            category: 'sunglasses',
           
          },
          {
        
            Name: 'Blue Aviator',
            img: 'https://tse1.mm.bing.net/th?id=OIP.Np2BtxQDflHPloBzateE7wHaDj&pid=Api&P=0&h=180',
            itemID: 'BA 1169',
            price: '5,499',
            category: 'sunglasses',
       
          },
          {
          
            Name: 'Burberry',
            img: 'https://tse3.mm.bing.net/th?id=OIP.JQqrlLLLZ-EwREfowHkZdAHaE8&pid=Api&P=0&h=180',
            itemID: 'BE 4291',
            price: '19,000',
            category: 'designer',
        
          },
          {
         
            Name: 'Balenciaga',
            img: 'https://tse4.mm.bing.net/th?id=OIP.jYamEZHXBF7lzW20SByuZQHaEo&pid=Api&P=0&h=180',
            itemID: 'BG 0029',
            price: '26,700',
            category: 'designer',
      
          },
          {
        
            Name: 'Gucci',
            img: 'https://tse4.mm.bing.net/th?id=OIP.vABipcddz3E8UXpSqmXK-gHaEQ&pid=Api&P=0&h=180',
            itemID: 'GG 0169',
            price: '15,169',
            category: 'designer',
  
          },
          {
           
            Name: 'Brown Wayfarer',
            img: 'https://tse4.mm.bing.net/th?id=OIP.yR2xZgWdWgCiIloN5_SWVQHaDj&pid=Api&P=0&h=180',
            itemID: 'BW 0029',
            price: '4,699',
            category: 'sale',
       
          },
          {
          
            Name: 'Gray Aviator',
            img: 'https://tse2.mm.bing.net/th?id=OIP.ok9M8dGHLyEqYtdEEDQXkwHaDj&pid=Api&P=0&h=180',
            itemID: 'GA 4291',
            price: '3,900',
            category: 'sale',
        
          },
          {
          
            Name: 'BluePink Round',
            img: 'https://tse4.mm.bing.net/th?id=OIP.DymJenqIk_FJ9hffVRZWNAHaDj&pid=Api&P=0&h=180',
            itemID: 'BP 169',
            price: '1,299',
            category: 'sale',
       
          }

])
    console.log("created: ",item)
})

router.get("/sunglasses",async(req,res)=>{
    try {
        const sunglasses = await Shade.find({category:"sunglasses"})

        console.log(sunglasses);
        res.json({
            itemArr:sunglasses
        })

    } catch (error) {
        console.log("fetch error",error)
    }
})

router.get("/frames",async(req,res)=>{
    try {
        const frames = await Shade.find({category:"casual"})

        console.log(frames);
        res.json({
            itemArr:frames
        })

    } catch (error) {
        console.log("fetch error",error)
    }
})


router.get("/designer",async(req,res)=>{
    try {
        const designer = await Shade.find({category:"designer"})

        console.log(designer);
        res.json({
            itemArr:designer
        })

    } catch (error) {
        console.log("fetch error",error)
    }
})


export default router