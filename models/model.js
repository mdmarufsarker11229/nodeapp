
const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    id:{
        type:String,
        require:true

    },
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    createdon:{
        type:Date,
        default:Date.now(),
    }
});

module.exports=mongoose.model("users",userSchema);