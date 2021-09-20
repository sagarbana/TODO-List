const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    todoname:{
        type:String,
        required:true
    },
    todotype:{
        type:String
    }
})

const todoschema =new mongoose.model('Todo',todoSchema);
module.exports=todoschema;
