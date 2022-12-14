const route = require('express').Router()
const carsVideosController =  require('./carsVideos.controller')

route.post("/addcarvideos",(req,res,next) => {
    carsVideosController.addCarVideo(req,res,next)
})


route.post("/getcarvideo",(req,res,next) => {
    carsVideosController.carvideos(req,res,next)
})

module.exports = route