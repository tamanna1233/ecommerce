const mongoose = require('mongoose')

const UserSchema =mongoose.Schema({
name:"string",
email:"string",
password:"string",
})

module.exports=mongoose.model("users",UserSchema)