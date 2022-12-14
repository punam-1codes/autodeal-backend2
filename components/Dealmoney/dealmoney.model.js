const mongoose = require("mongoose")
const schema = mongoose.Schema;
const dealmoneySchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    //news section
    name:{
        type:String,
       
    },
    email:{
        type:String,
        
    },
    wsno:{
        type:Number,
       
    },

},{
    timestamps:true
})

const dteamSchema = mongoose.model('dteam',dealmoneySchema);
module.exports = dteamSchema;
