import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:string
    },
    password:{
        type:string
    },

});

export const User = mongoose.model("User",userSchema);

