const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema=new Schema({

    name:{
        type:String,
        required: true,
        
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },


})


module.exports=mongoose.model('Product',ProductSchema);
