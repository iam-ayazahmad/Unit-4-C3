const express = require("express")
const mongoose=require("mongoose")

const app=express()

const ConnectDB =()=>{
    mongoose.connect("mongodb://localhost:27017/students")
}
const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Integer,
    email:String,
    profileImages:Array,
    timeStamp:String
})

const User=mongoose.model("books",userSchema)
// books api
app.get("/books",async(req,res)=>{
    const booksData=await User.find({}).lean().exec()
    return res.send(booksData)
})

app.listen(4500,async()=>{
    try{
        await ConnectDB();
    }
    catch{
        console.log("error")
    }
    console.log("listening for 4500")
})



