const mongoose = require("mongoose")
const schema = mongoose.Schema;
const dashboardUserSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    //news section
    printusername:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dashuserid:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const dashboardUser = mongoose.model('dashboard-user',dashboardUserSchema);
module.exports = dashboardUser;
