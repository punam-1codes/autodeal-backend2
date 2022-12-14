const route = require('express').Router()
const userController =  require('./user.controller')

route.post("/adduser",(req,res,next) => {
    userController.adduser(req,res,next)
})


route.post("/getuser",(req,res,next) => {
    userController.getusers(req,res,next)
})

route.post("/loginapi",(req,res,next) => {
    userController.otpapi(req,res,next)
})

route.post("/registerapi",(req,res,next) => {
    userController.nonloginotpapi(req,res,next)
})

route.post("/useraddcars",(req,res,next) => {
    userController.useraddcars(req,res,next)
})


//using this api we can calculate total price of viewcars
route.post("/totalprice",(req,res,next) => {
    userController.totalPrice(req,res,next)
})

//update api for page 33 to get testdrive info
route.post("/updatedata",(req,res,next) => {
    userController.updateData(req,res,next)
})


//create api for page 43 and 44 for update data and add time field in testdrivedatabase
route.post("/locationdate",(req,res,next) => {
    userController.locationDate(req,res,next)
})

//create new api for adding date and time for testdrive page no 44
route.post("/dateandtime",(req,res,next) => {
    userController.dateandTime(req,res,next)
})

//here we create new api for get user info using mobile number
route.post("/nouserdata",(req,res,next) => {
    userController.nouserData(req,res,next)
})


//here we get active and soft deleted user
route.post("/usersdata",(req,res,next) => {
    userController.usersData(req,res,next)
})



module.exports = route

