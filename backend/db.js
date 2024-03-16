const mongoose = require('mongoose');
require('dotenv').config()



const connectToDB = async()=>{
   await mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to mongo db!'))
  .catch((err)=>{
    console.log("error in connecting mnongo db",err.message)
  })
}

module.exports = connectToDB


