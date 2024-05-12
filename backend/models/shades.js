import mongoose from "mongoose";

const shadesSchema = new mongoose.Schema({
    Name:{
        type: 'string',
        required: true
    },
    img:{
        type: 'string',
        required: true
    },
    itemID:{
        type: 'string',
        required: true
    },
    price:{
        type: 'string',
        required: true
    },
    category:{
        type: 'string',
        required: true
    }

});

export const Shade = mongoose.model("Shade",shadesSchema)