const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const pModel=require("./model/productModel")
Mongoose.connect("mongodb+srv://college:college12345@cluster0.nk3uqez.mongodb.net/productdb?retryWrites=true&w=majority",{useNewUrlParser:true})

var app=Express()
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
res.send("welcome")
})

app.post("/add",async(req,res)=>{
    let data=new pModel(req.body)
    console.log(data)
    await data.save()
    res.send(data)
    })
    
    app.get("/view",async(req,res)=>{
        let data= await pModel.find()
        res.send(data)
        })

app.listen(3000)

