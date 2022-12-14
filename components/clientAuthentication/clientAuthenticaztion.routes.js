const route = require('express').Router()

const { Router } = require('express')
// imports controller
const clientController = require('./clientAuthenticaztion.controller')

// get clients 
route.get('/allusers', async (req,res,next) => {
    clientController.allusers(req,res,next) 
})

// add client routes
route.post('/signup',(req,res,next) => {
    clientController.signup(req,res,next)
})

route.post('/login',(req,res,next) => {
    clientController.login(req,res,next)
})

route.post("/otp",(req,res,next)=>{
    clientController.otp(req,res,next)
})


//new routes for athentication
route.post("/signuptwo",(req,res,next)=>{
    clientController.signuptwo(req,res,next)
})

module.exports = route