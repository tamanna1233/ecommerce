const mongoose = require("mongoose")

const addproductSchema = mongoose.Schema({
    productname:String,
    price:Number,
    company:String,
    quantity:Number,
})


module.exports=mongoose.model("add_product",addproductSchema)