const route = require('express').Router()
const ocalController =  require('./ocalteam.controller')

route.post("/addocalteam",(req,res,next) => {
    ocalController.addocatteam(req,res,next)
})


route.post("/getocalteam",(req,res,next) => {
    ocalController.getocalteam(req,res,next)
})

module.exports = route