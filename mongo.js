var mongoose = require('mongoose');

// mongoose.connect("mongodb://0.0.0.0:27017/crud",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
// {
// }).then(()=>{
//     console.log("connected");
// })
// .catch(()=>{
//     console.log("failed");
// })//crud

// mongoose.connect("mongodb://0.0.0.0:27017/cherryblossomkindergarten",function check(error)
// {
//     if(error)
//     {
//         console.log("error")
//     }
//     else
//     {
//         console.log("connected")
//     }
// });
mongoose.connect("mongodb+srv://cybertronarmy2611:Cyber2611@cluster0.v9ot1ts.mongodb.net/cherryblossomkindergarten",

    function check(error)
{
    if(error)
    {
        console.log("error")
    }
    else
    {
        console.log("connected")
    }
});

const newSchema = new mongoose.Schema({
    name:{
            type:String,
            requird:true
    },
    phone:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true
    },
    msg:{
        type:String,
        requird:true
}
})

const collection=mongoose.model("collection",newSchema)

// data =[{
//     name :"Sagar"
// },
// {
//     name :"Paras"
// }
// ]
// collection.insertMany(data)



module.exports=collection

