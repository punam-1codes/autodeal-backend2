const mongoose = require('mongoose');
const bcrypt =  require('bcrypt')
const schema = mongoose.Schema;
const clientSchema = new schema({
    username:{
        type:String,
        // required:true
    },
    hash:{
        type:String,
        // required:true
    },
    mobile:{
        type:String,
        required:true,

    },
    country:{
        type:String,
        // required:true
    },
    city:{
        type:String,
        // required:true
    },
    pincode:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
    date:{
        type:String
    }
    
},{
    timestamps:true
})

clientSchema.methods.hashPass  = function (pass) {
    return bcrypt.hashSync(pass,bcrypt.genSaltSync(10))
}
clientSchema.methods.comparePass  = function (pass,hash) {
    return bcrypt.compareSync(pass,hash)
}
const Client = mongoose.model("clients",clientSchema)
module.exports = Client