import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    FirstName:{
        type: 'string',
        required: true
    },
    LastName:{
        type: 'string',
        required: true
    },
    img:{
        type: 'string',
        required: true
    },
    price:{
        type: 'string',
        required: true
    },
    mobile:{
        type: 'string',
        required: true
    },
    address:{
        type: 'string',
        required: true
    },
    

});

export const Order = mongoose.model("Order",orderSchema)