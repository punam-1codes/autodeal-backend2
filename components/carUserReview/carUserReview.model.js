const mongoose = require("mongoose")
const schema = mongoose.Schema;
const carsUserReviewSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    //news section
    user_title:{
        type:String,
        required:true
    },
    user_review:{
        type:String,
        required:true
    },
    user_rating:{
        type:Number,
        required:false
    }
    

  

},{
    timestamps:true
})

//collection name and car schema name
const carsUserReview = mongoose.model('caruserreview',carsUserReviewSchema);
module.exports = carsUserReview;
