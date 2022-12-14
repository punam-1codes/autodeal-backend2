const route = require('express').Router()
const oldCarsController =  require('./oldCarsDetail.controller')


route.post("/addoldcar",(req,res,next) => {
    oldCarsController.addoldcar(req,res,next)
})


route.post("/getoldcars",(req,res,next) => {
    oldCarsController.getoldcars(req,res,next)
})


route.post("/availableoldcars",(req,res,next) => {
    oldCarsController.getavailableoldcars(req,res,next)
})

route.post("/getidcar/:id",(req,res,next) => {
    oldCarsController.getcar(req,res,next)
})


route.post("/:id",(req,res,next) => {
    oldCarsController.getoldcar(req,res,next)
})


route.post("/delete/:id",(req,res,next) => {
    oldCarsController.removeOldCar(req,res,next)
})

route.post("/update/:id",(req,res,next) => {
    oldCarsController.updateOldCar(req,res,next)
})




module.exports = route