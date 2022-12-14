const mongoose = require("mongoose")
const schema = mongoose.Schema;
const ocalteamSchema = new schema({
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

const oteamSchema = mongoose.model('ocalteam',ocalteamSchema);
module.exports = oteamSchema;
