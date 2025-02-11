const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=8080;
const path=require("path");
const Chat=require("./models/chat");
var methodOverride = require('method-override');
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(methodOverride('_method'));
app.get('/',(req,resp)=>{
    console.log("THis is root");
    resp.render("index.ejs");
})
app.listen(port,()=>{
    console.log("App is litening at ",port);
});

main()
.then((res)=>{
    console.log("connection success");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};


// const chat1=new Chat({
//     from:"Sahil",
//     to:"Om",
//     msg:"hello",
// })

// chat1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



app.get('/chats',async (req,resp)=>{
    let chats=await Chat.find();
    resp.render("index.ejs",{chats});
});

app.get('/chats/new',(req,resp)=>{
    resp.render("new.ejs");
});

app.post('/chats',async (req,resp)=>{
    let {from,to,msg}=req.body;
    let date=new Date();
    // console.log(from,to,msg);
    let obj={from,to,msg,date};
    // console.log(obj);
    try{
        let res=await Chat.insertOne(obj);
        console.log(res);

    }catch(err){
        console.log(err);
    }
    resp.redirect("/chats")
})

app.get('/chats/:id/edit',async (req,resp)=>{
    let {id}=req.params;

    let chat=await Chat.findById(id);
    
    // console.log(chat);
    resp.render("edit.ejs",{chat});
});

app.put('/chats/:id',async (req,resp)=>{
    let {id}=req.params;
    let {msg,time}=req.body;
    let res=await Chat.findByIdAndUpdate(id,{msg:msg,createdAt:time},{new:true});
    console.log(res);
    resp.redirect("/chats");
});

app.delete('/chats/:id',async (req,resp)=>{
    let {id}=req.params;
    let res=await Chat.findByIdAndDelete(id);
    console.log(res);
    resp.redirect("/chats");
})