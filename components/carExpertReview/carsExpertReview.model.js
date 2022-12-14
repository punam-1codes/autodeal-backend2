const mongoose = require("mongoose")
const schema = mongoose.Schema;
const carsExpertReviewSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    //news section
    expert_review_id:{
        type:String,
        required:true
    },
    //expert reviews section
    brand:{
        type:String,

    },
    model:{
        type:String,

    },
    // expert_reviews_Model:{
    //     type:String,
        
    // },
    expert_reviews_stars:{
        type:String,
        
    },
    expert_reviews_description:{
        type:String,
        
    },
    expert_reviews_by:{
        type:String,
        
    },
    expert_reviews_time:{
        type:String,
        
    },

  

},{
    timestamps:true
})

//collection name and car schema name
const carsExpertReview = mongoose.model('car-expertreview',carsExpertReviewSchema);
module.exports = carsExpertReview;
