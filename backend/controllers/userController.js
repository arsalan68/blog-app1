let User = require('../models/User')
// npm bcrypt 
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
    let { name, email, password, address } = req.body;
    // or
    // let name= req.body.name;
    // let email= req.body.email;
    // let password= req.body.password;
    // let address= req.body.address;

    //    ye console check krne ke liye kiyta tha 
    // console.log(name,email,password,address)

    let userExists = await User.findOne({ email: req.body.email })
    if (userExists) {
        return res.json({success:false,msg:"User allready Exists"})
    }
    try {
        // ye sab code npm bycript me hame milega niche ke 2 line
        var salt = bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync(password, salt);
        let detail = await new User({
            name,
            email,
            password: hashedPassword,
            address
        })

        await detail.save()
        res.status(200).json({ success:true, msg: "user created successfully", detail })
    } catch (error) {
        res.status(500).json({ success: false, msg: "error in creating user", error: error.message })
    }
}

const loginUser = async (req, res) => {
    let { email, password } = req.body;
  try {
    let userExists = await User.findOne({ email: req.body.email })
    if (userExists) {
        let passwordCompare = await bcrypt.compareSync(req.body.password, userExists.password);
        if (passwordCompare) {
            return res.status(200).json({ success: true, msg: "login successfully" ,userExists})
        } else {
          return  res.status(401).json({ success: false, msg: "invalid credentials" })
        }
    } else {
      return  res.status(404).json({ msg: "User does not exists please sign" })
    }
  } catch (error) {
    res.status(500).json({ success: false, msg: "error in login user", error: error.message })
  }
}

const updateUser = async (req, res) => {
    const { address, name, gmail, password } = req.body;
    var salt = bcrypt.genSaltSync(10);
    try {
        const hashedPassword = bcrypt.hashSync(password, salt)
        const _id = req.params._id
        let user = await User.findByIdAndUpdate({ _id: req.params._id },
        { $set: { address: address, name: name, gmail: gmail, password: hashedPassword } }, { new: true });
        res.json({ msg: "User updated successfully", user })
    } catch (error) {
        res.status(500).json({ msg: "Error in updating user", success: false })
    }
}

const deleteUser = async (req, res) => {
     try{
    let user = await User.findByIdAndDelete({_id:req.params._id})
    res.status(200).json({msg:"User delete successfully", success:true})
     }catch(error) {
        res.status(500).json({ msg: "Error in deleted user", success: false , error:error.message})
     }
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}