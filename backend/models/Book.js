
const mongoose =require("mongoose")

const book = mongoose.Schema({
    title:{
        type:String,
    },
    price:{
        type:String,
    },
    author:{
        type:String,
    },
    body:{
        type:String,
    },
    pic:{
        type:String,
    },
    image:{ 
        type:String,
    }
});

module.exports = mongoose.model("book",book);