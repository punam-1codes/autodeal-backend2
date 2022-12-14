const mongoose = require("mongoose")
const schema = mongoose.Schema;
const usersSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    mobilenumber:{
        type:String,
        required:true,
        maxlength:10,
        minlength:10
    },
    name:{
        type:String,
        required:true
    },
    logindate:{
        type:Date,
        required:true
    },
    // cars:{
    //     type:String,
    //     default:"abc"
        
    // }

},{
    timestamps:true
})

//collection name and car schema name
const users = mongoose.model('users',usersSchema);
module.exports = users;
