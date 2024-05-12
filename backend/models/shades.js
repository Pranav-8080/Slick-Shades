import mongoose from "mongoose";

const shadesSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    itemID:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }

});

export const Shade = mongoose.model("Shade",shadesSchema)