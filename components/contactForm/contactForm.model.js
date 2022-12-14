const mongoose = require('mongoose');
const bcrypt =  require('bcrypt')
const schema = mongoose.Schema;
const ContactSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    fullname:{
        type:String,
        required:true
    },
   
    mobile:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    // securitycapcha:{
    //     type:String,
    //     required:true
    // },
    date:{
        type:String
    }
    
},{
    timestamps:true
})


const Contact = mongoose.model("contactsus",ContactSchema)
module.exports = Contact