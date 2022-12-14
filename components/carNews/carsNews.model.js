const mongoose = require("mongoose")
const schema = mongoose.Schema;
const carsNewsSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    //news section
    carnews_id:{
        type:String,
        // required:true
    },
    pictures:{
        type:String
    },
    news_cartitle:{
        type:String,
        // required:true
    },
    news_date:{
        type:String,
        // required:true
    },
    news_publisher:{
        type:String,
        // required:true
    },
    news_cardescription:{
        type:String,
        // required:true
    },
    brand:{
        type:String,
    },
    model:{
        type:String,
    }

},{
    timestamps:true
})

//1st colletion - car-news
const carsNews = mongoose.model('master_carnews',carsNewsSchema);
module.exports = carsNews;
