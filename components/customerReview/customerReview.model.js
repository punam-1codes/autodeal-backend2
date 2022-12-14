const mongoose = require("mongoose")
const schema = mongoose.Schema;
const customerReviewSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    //customer review section
    car_id:{
        type:String,
        required:true
    },
    // cr_car_img:{
    //     type:String,
    //     required:true
    // },
    cr_customer_img:{
        type:String,
        required:true
    },
    cr_customer_name:{
        type:String,
        required:true
    },
    cr_publisher:{
        type:String,
        required:true
    },
    cr_car_brand:{
        type:String,
        required:true
    },
    cr_car_model:{
        type:String,
        required:true
    },
    cr_location:{
        type:String,
        required:true
    },
    cr_description:{
        type:String,
        required:true
    },
    cr_star:{
        type:String,
    },

},{
    timestamps:true
})

const customerReview = mongoose.model('customer-review',customerReviewSchema);
module.exports = customerReview;
