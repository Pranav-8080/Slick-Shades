import mongoose from "mongoose";
import { Shade } from "./shades.js";


const orderSchema = new mongoose.Schema({
    
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    cartItems:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Shade',
        required: true
    },
    mobileNumber:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    
});

orderSchema.set('strictPopulate', false);


export const Order = mongoose.model("Order", orderSchema);
