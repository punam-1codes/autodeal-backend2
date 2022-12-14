const bcrypt = require("bcrypt");
const express = require("express");

const Client = require('./clientAuthenticaztion.model')
const jwt = require('jsonwebtoken')


exports.signup  = async function (req,res,next) {
    let newClient = new Client()
    newClient.username = req.body.username
    newClient.mobile = req.body.mobile
    newClient.country = req.body.country
    newClient.city = req.body.city
    newClient.pincode = req.body.pincode
    newClient.email = req.body.email
    newClient.address = req.body.address
    let pass = newClient.hashPass( req.body.password)
    newClient.hash = pass;

    try {
        await   newClient.save()
        .then(()=>{
            res.status(200).send({success:true,msg:"user is registed",error:null})
    
        }).catch((e) => {
            res.status(200).send({success:false,msg:null,error:e})
    
        })
    } catch (e) {
        res.status(200).send({success:false,msg:null,error:e})

    }

}

exports.allusers = async function (req,res,next) {
    try {

        await Client.aggregate([{$project:{_id:1,username:1,mobile:1,city:1,pincode:1,email:1,address:1,createdAt:1}},{$sort:{createdAt:-1}}])
        
        .then((d)=>{
            res.status(200).send({success:true,data:d,error:null})
    
        }).catch((e) => {
            res.status(200).send({success:false,data:null,error:e})
    
        })
    } catch (e) {
        res.status(200).send({success:false,msg:null,error:e})

    }
}
exports.login = async function (req,res,next) {
    try {

        await Client.findOne({email:req.body.email})
        .then((d)=>{
            if(d !=null) {
             let result =    d.comparePass(req.body.password,d.hash)
             console.log("result",result);
             if(result == true) {
                let x =  
                jwt.sign({
                  data: {
                    "username": d.username,
                    "mobile": d.mobile,                    
                    "email": d.email,                  
                  }
                }, 'secret', { expiresIn: '1h' });
            res.status(200).send({success:true,data:x,error:null})

             } else {
                res.status(200).send({success:false,msg:"email or password is not match"})

             }
            } else {
                res.status(200).send({success:false,msg:"email or password is not match"})

            }
            // console.log("eeeeeeeeeee",d);
            // res.status(200).send({success:true,data:d,error:null})
    
        }).catch((e) => {
            res.status(200).send({success:false,data:null,error:e})
    
        })
    } catch (e) {
        res.status(200).send({success:false,msg:null,error:e})

    }
}






exports.otp = async function(req,res,next) {

    

}


//new controllers for clients

// exports.signuptwo = async function (req, res, next) {
//     // let genrateId = nanoid(6);

//     let nclient = new Client({
//         // car_id: genrateId,
//         username:req.body.username,
//         hash : req.body.hash,
//         mobile:req.body.mobile,
//         country : req.body.country,
//         city : req.body.city,
//         pincode : req.body.pincode,
//         email : req.body.email,
//         address : req.body.address,
//         date:req.body.date
//     })
//     await nclient
//     .save()
//     .then((d)=>{
//         res
//         .status(200)
//         .send({ success: true, msg: "new client is added", error: null, data: d });
//     })
//     .catch((e)=>{
//         res.status(200).send({ success: false, msg: null, error: e });
//     })
// }


exports.signuptwo = async function (req, res, next) {
    // let genrateId = nanoid(6);
    
    //my code
    const body=req.body;

    if(!(body.mobile && body.hash  )){
        return res.status(400).send({error:"Data not formatted properly"})
    }

    //creating a new mongoose doc from user data
    const user =new Client(body);
     
    //generate salt to hash password
    const salt = await bcrypt.genSalt(10);

    user.hash=await bcrypt.hash(user.hash,salt);
    user.save().then((doc)=>res.status(201).send(doc))


}