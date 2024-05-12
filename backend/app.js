import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import 'dotenv/config'
import bodyParser from "body-parser";

import userRoutes from "./routes/user.js"
import shadesRouter from "./routes/shades.js"

const PORT = 3000;
const mongoUrl = process.env.MONGO_URL 

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

console.log(mongoUrl)
mongoose
.connect(mongoUrl, {
  dbName: "slick_shadesDB",
})
.then(() => {
  console.log("Connected to database.");
})
.catch((err) => {
  console.log(`Some Error occured. ${err}`);
});

app.use("/user",userRoutes)
app.use("/shades",shadesRouter)


app.listen(PORT,()=>{
    console.log(`listening on Port ${PORT}`)
})