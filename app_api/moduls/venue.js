const { default: mongoose } = require("mongoose");
var mongodb = require("mongoose");
var hour=new mongoose.Schema({
    days:{type:String,required:true},
    open:{type:String,required:true},
    closed:{type:String,required:true},
    inclosed:{type:Boolean,required:true}
});
var comment=new mongoose.Schema({
author:{type:String,required:true},
    rating:{type:Number,required:true,min:0,max:5},
    text:{type:String,required:true},
     date:{type:Date,default:Date.now}
});
var venue=new mongodb.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    rating:{type:Number,default:0, min:0, max:5},
    foodanddrink:[String],//string dizisi olarak anla direkt
    coordinates:{type: [Number],index:"2dsphere"},
    hours:[hour],
    comments:[comment]
    
});
mongoose.model("Venue",venue,"venues");