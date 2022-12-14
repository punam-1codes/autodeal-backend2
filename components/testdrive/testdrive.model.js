const mongoose = require("mongoose")
const schema = mongoose.Schema;
const testdriveSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    userid:{
        type:String,
        // required:true
    },
    mobilenumber:{
        type:String,
        required:true,
        maxlength:10,
        minlength:10
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        // required:true
    },
    slotbook:{
        type:String,
        // required:true
    },
    testdrivedate:{
        type:String,
        // required:true
    },
    testdrivetime:{
        type:String,
        // required:true
    },
    registrationdate:{
        type:Date,
        required:true
    },
    viewcars:{
        type:Array,
        // default:"abc"
    }


},{
    timestamps:true
})

//collection name and car schema name
const testdrive = mongoose.model('testdrive',testdriveSchema);
module.exports = testdrive;
