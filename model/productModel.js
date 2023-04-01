const Mongoose=require("mongoose")

let pSchema=Mongoose.Schema
(
    {
        productID:String,
        productname:String,
        modelnumber:String,
        MRP:String,
        image:String
    }
)

module.exports=Mongoose.model("products",pSchema)