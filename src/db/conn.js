const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todo",{
    //useCreateIndex:true,   // not supported now 
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection done from conn.js side ");
}).catch((e)=>{
    console.log("connection NOT done from conn.js side");
})