const route = require('express').Router()
const carsExpertReviewController =  require('./carsExpertReview.controller')

route.post("/addexpertreview",(req,res,next) => {
    carsExpertReviewController.addexpertreview(req,res,next)
})


route.post("/getexpertreview",(req,res,next) => {
    carsExpertReviewController.cexpertreviews(req,res,next)
})

module.exports = route

