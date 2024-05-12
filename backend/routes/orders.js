import express from "express"
import {Order} from "../models/order.js"

const router = express()

router.post("/neworder",async(req,res)=>{
    
    const {
        firstName,
        lastName,
        cartItems,
        mobileNumber,
        address,
    } = req.body
    console.log(req.body)
    try {
        await Order.create({
            firstName,
            lastName,
            cartItems,
            mobileNumber,
            address,
        })
    } catch (error) {
        console.log(error)
    }
})

router.post("/myorders",async(req,res)=>{
    const {lastname} = req.body
    try {
        const orders = await Order.find({lastName:lastname}).populate("cartItems",["Name","img","price","itemID"]);
        console.log("fetched:-----------------",orders);
        res.json({
            myOrders: orders
        })
    } catch (error) {
        console.log(error)
    }
})

export default router