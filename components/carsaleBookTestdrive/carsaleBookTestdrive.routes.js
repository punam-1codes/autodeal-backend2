const route = require('express').Router()
const sellcarBooktestDrive = require('./carsaleBookTestdrive.controller.js')


route.post("/addsellcarbtd",(req,res,next) => {
    sellcarBooktestDrive.addSellCarBtd(req,res,next)
})



route.post("/getsellcarsbtd",(req,res,next) => {
    sellcarBooktestDrive.getSellCarsBtd(req,res,next)
})


route.post("/sellcarbtdid/:id",(req,res,next) => {
    sellcarBooktestDrive.getSellCarBtdById(req,res,next)
})

route.post("/sellcarbtdid/delete/:id",(req,res,next) => {
    sellcarBooktestDrive.removeSellCarBtd(req,res,next)
})


route.post("/sellcarbtdid/update/:id",(req,res,next) => {
    sellcarBooktestDrive.updateSellCarBtd(req,res,next)
})

route.post("/availablebtdid/sellcarbtd",(req,res,next) => {
    sellcarBooktestDrive.availableSellCarBtd(req,res,next)
})

//new sell cars
route.post("/latestcarsbtd",(req,res,next) => {
    sellcarBooktestDrive.latestSellCarsBtd(req,res,next)
})




module.exports = route