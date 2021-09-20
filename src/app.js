const express=require("express");
//const path = require("path/posix");
const app=express();
const port=process.env.PORT || 3000;
require("./db/conn");
const TodoSchema=require('./models/todoschema');

app.set('view engine','hbs');

//app.use(express.json()); no need this line 
app.use(express.urlencoded({extended:false})); 

app.get('/', async(req,res) => {
    //console.log("from app.get side ");
    //const alltodo=await TodoSchema.find();
    try {
        const tp=await TodoSchema.find();
        //console.log(tp[0].todotype);

        res.render("index",{str1:await TodoSchema.find()});
    } catch (error) {
        console.log("Error in Fetching Data");
    }
    //,{todo:alltodo});
})

app.post('/add',async (req,res) => {
    try {
        const addtodo=new TodoSchema({
            todoname:req.body.taskname,
            todotype:req.body.tasktype
        }) 
        const result=await addtodo.save();
    } catch (error) {
        console.log("Error in saving task");
    }
    
    //console.log(result);

    res.redirect("/");
    //console.log(req.body.taskname);
})

app.get('/delete/:_id',(req,res) => {
    const {_id}=req.params;
    TodoSchema.deleteOne({_id}).then( () => {
        console.log("Deleted your request");
        res.redirect("/");
    }).catch( (e) =>{
        console.log("Not deleted ");
    })
})


app.listen(port,()=> {
    console.log(`Listening on port : ${port}`);
})