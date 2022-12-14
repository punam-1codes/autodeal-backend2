const route = require('express').Router()
const dashboardUserController =  require('./dashboardUser.controller')

route.post("/adddashuser",(req,res,next) => {
    dashboardUserController.addDashUser(req,res,next)
})

route.post("/getdashusers",(req,res,next) => {
    dashboardUserController.getDashUsers(req,res,next)
})

route.post("/getalldashusers",(req,res,next) => {
    dashboardUserController.getAllDashUsers(req,res,next)
})


route.post("/getdashuser/:id",(req,res,next) => {
    dashboardUserController.getDashUserById(req,res,next)
})


//get dash user by user name
route.post("/getdashprintuser/:printusername",(req,res,next) => {
    dashboardUserController.getDashPrintUser(req,res,next)
})

route.post("/removedashuser/:id",(req,res,next) => {
    dashboardUserController.removeDashUserById(req,res,next)
})

route.post("/updatedashuser/:id",(req,res,next) => {
    dashboardUserController.updateDashUser(req,res,next)
})

route.post("/logindashuser",(req,res,next)=>{
    dashboardUserController.matchLoginDashUser(req,res,next)
})

module.exports = route