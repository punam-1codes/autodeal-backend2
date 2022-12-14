const route = require('express').Router()
const inquiriesController =  require('./inquiries.controller')


route.post("/addInquiries",(req,res,next) => {
    inquiriesController.addInquiries(req,res,next)
})


route.post("/getInquiries",(req,res,next) => {
    inquiriesController.getInquiries(req,res,next)
})


module.exports = route