const mongoose = require('mongoose');
const schema = mongoose.Schema
const SearchSchema = new schema({

    search:{
        type:String
    },
    carId:{
        type:String
    },

    matchedCarsId: [{ type: schema.Types.ObjectId, ref: 'cars' }],
    searchcount:{
        type:Number,
        default:1
    }


},{
    timestamps:true
})

const Search = mongoose.model("car-searches",SearchSchema)
module.exports = Search