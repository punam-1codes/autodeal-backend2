const mongoose = require("mongoose")
const schema = mongoose.Schema;
const sellcarBookTestDriveSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    scbtd_id:{
        type:String,
        required:true
    },
    scbtd_location:{
        type:String,
    },
    scbtd_address:{
        type:String,  
    },
    scbtd_date:{
        type:String,
    },
    scbtd_time:{
        type:String,  
    },
    scbtd_username:{
        type:String,
    },
    scbtd_mobile:{
        type:String,  
    },
    scbtd_car_id:{
        type:String,
    },
},{
    timestamps:true
})

const carSellBTD = mongoose.model('carsellbtd',sellcarBookTestDriveSchema);
module.exports = carSellBTD;
