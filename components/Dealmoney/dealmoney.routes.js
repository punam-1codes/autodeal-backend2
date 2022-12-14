const route = require('express').Router()
const dealmoneyController =  require('./dealmoney.controller')

route.post("/adddeal",(req,res,next) => {
    dealmoneyController.adddealmoneyteam(req,res,next)
})


route.post("/getdeal",(req,res,next) => {
    dealmoneyController.getdealmoneyteam(req,res,next)
})

route.post("/removedm/:id",(req,res,next) => {
    dealmoneyController.removeCar(req,res,next)
})
route.post("/updatedm/:id",(req,res,next) => {
    dealmoneyController.updateCar(req,res,next)
})

module.exports = route