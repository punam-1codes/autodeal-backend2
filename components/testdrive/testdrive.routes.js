const route = require('express').Router()
const testdriveController =  require('./testdrive.controller')

route.post("/addtestdrive",(req,res,next) => {
    testdriveController.addtestdrive(req,res,next)
})


route.post("/gettestdrive",(req,res,next) => {
    testdriveController.gettestdrive(req,res,next)
})

module.exports = route

