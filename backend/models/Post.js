const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'user'
    }
},{timestamps:true})

const Post = mongoose.model('post',postSchema)
module.exports = Post