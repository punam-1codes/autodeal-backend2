const mongoose = require("mongoose")
const schema = mongoose.Schema;
const inquiriesNewsSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    //news section
    name:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        required:true
    },
    inquiryDate:{
        type:Date,
        required:true
    },

},{
    timestamps:true
})

//1st colletion - car-news
const inquiries = mongoose.model('inquiries',inquiriesNewsSchema);
module.exports = inquiries;
