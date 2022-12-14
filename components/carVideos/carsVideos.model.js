const mongoose = require("mongoose")
const schema = mongoose.Schema;
const carsVideosSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    //news section
    brand:{
        type:String,
       
    },
    model:{
        type:String,
        
    },
    car_video_id:{
        type:String,
        required:true
    },
    //car videos section
    car_videos_link:{
        type:String,
    },
    car_videos_title:{
        type:String,
    },
    car_videos_by:{
        type:String,
    },
    car_videos_date:{
        type:String,
    },
    car_views:{
        type:Number,
    },
    car_likes:{
        type:Number,
    }

},{
    timestamps:true
})

const carsVideos = mongoose.model('car-videos',carsVideosSchema);
module.exports = carsVideos;
