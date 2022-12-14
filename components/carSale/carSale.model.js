const mongoose = require("mongoose")
const schema = mongoose.Schema;
const carSellSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    sellcar_view:{
        type:Number,
        default:0
    },
    sell_car_id:{
        type:String,
        required:true
    },
    brand:{
        type:String,
    },
    model:{
        type:String,  
    },
    fueltype:{
        type:String,
    },
    month:{
        type:String,  
    },
    year:{
        type:String,
    },
    owner:{
        type:String,  
    },
    color:{
        type:String,
    },
    kd_Done:{
        type:Number,  
    },
    city:{
        type:String,
    },
    registration_no:{
        type:String,  
    },
    registration_at:{
        type:String,
    },
    life_time_tax:{
        type:String,  
    },
    car_insurance:{
        type:String,
    },
    insurance_valid_till:{
        type:String,  
    },
    estimated_price:{
        type:Number,
    },
    is_car_accidental:{
        type:String,  
    },
    is_car_flood_affected:{
        type:String,
    },
    sellcar_img:{
        type:String,  
    },
    sellcaruser:{
        type:String,
    },
    sellcarusernumber:{
        type:String,
    },
   
    

},{
    timestamps:true
})

const carSell = mongoose.model('car-sell',carSellSchema);
module.exports = carSell;
