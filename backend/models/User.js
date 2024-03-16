// ye pura code hame postman pe data send krta h

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        minlength:[3,"Name should be atleast three character"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        trim:true,
        unique:[true,"Email should be unique"],
        match:[/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ , "Please enter valid email"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6,"Password can not be less than 6 character"]
    },
    address:{
        type:String,
        trim:true,
        required:true
    }
    //timestapms ham is liye diye h ki user kab login signup kiya h time btayega
},{timestamps:true})

const User = mongoose.model('user',userSchema)
module.exports = User
            //   or 
// module.exports = mongoose.model('user',userSchema)