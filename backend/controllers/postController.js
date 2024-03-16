let Post = require('../models/Post')


const createPost = async (req, res) => {
    const { title, desc, image, user } = req.body;
    try{
    let post = await Post.create({ 
        title, 
        desc,
        image,
         user 
     })
     res.status(200).json({msg:"post created succesfully", success:true})
    }catch(error){
        res.status(500).json({msg:"error in creating post", success:false})
    }
    }

const updatePost = async (req, res) => {
    const { title, desc, image} = req.body;
  try{ 
    let postDetail = await Post.findByIdAndUpdate({ _id: req.params._id },
    {$set: { title, desc, image, } }, { new: true });
    res.status(200).json({ msg: "Post updated successfully", postDetail,success:true })
    }catch(error){
        res.status(500).json({msg:"error in updating post", success:false})
    }
}

const deletePost = async (req, res) => {
     try{
        let deleteDetail = await Post.findByIdAndDelete({ _id: req.params._id })
        res.status(200).json({ msg: "Post deleted successfully",success:true })
     }catch(error){
        res.status(500).json({msg:"error in deleting post", success:false})
     }
}

const getAllPost = async (req, res) => {
     try{
        let post = await Post.find().populate('user','name')
        res.status(200).json({msg:"fetched all post successfully" ,post,success:true})
     }catch(error){
        res.status(500).json({msg:"error in getting post", success:false})
     }
}

const getUserPost = async (req, res) => {
    try{
        let post = await Post.find({user:req.params._id})
        res.status(200).json({msg:"fetched user all post successfully" ,post,success:true})
     }catch(error){
        res.status(500).json({msg:"error in getting post", success:false})
     }
}


module.exports={
    createPost,
    updatePost,
    deletePost,
    getAllPost ,
    getUserPost
}