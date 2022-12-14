const route = require('express').Router()
const carsUserReviewController =  require('./carUserReview.controller')

//page no 24 , btn write your review
route.post("/adduserreview",(req,res,next) => {
    carsUserReviewController.adduserreview(req,res,next)
})


route.post("/getuserreviews",(req,res,next) => {
    carsUserReviewController.cuserreviews(req,res,next)
})

module.exports = route

