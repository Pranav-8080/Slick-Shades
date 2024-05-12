import express from "express"
import {User} from "../models/user.js"

const router = express()

router.post("/signup",async(req,res)=>{
    console.log(req.body)

    try {
         await User.create({
            email: req.body.email,
            password: req.body.pass
        })
        res.json({
            msg: "user created"
        })
    } catch (error) {
        console.log("error when trying to create a document",error)
        res.json({
            msg: "Db err"
        })

    }


})


router.post("/login",async(req,res)=>{
    console.log(req.body)
    try {
        const check = await User.findOne({
            email: req.body.email,
            password: req.body.pass
        })
        console.log("check",check)
        if(check){
            res.json({
                msg: "exists"
            })
        }else{
            res.json({
                msg: "doesnt exists"
            })
        }

    } catch (error) {
        console.log("db err")
        res.json({
            msg: "db err"
        })
    }
})


export default router