const route = require('express').Router()
const customerReviewController =  require('./customerReview.controller')


route.post("/addcreview",(req,res,next) => {
    customerReviewController.addcreview(req,res,next)
})

route.post("/getallcreview",(req,res,next) => {
    customerReviewController.getallcreview(req,res,next)
})


module.exports = route