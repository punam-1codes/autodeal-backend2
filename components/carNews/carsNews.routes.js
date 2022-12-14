const route = require('express').Router()
const carsNewsController =  require('./carsNews.controller')


route.post("/addcarnews",(req,res,next) => {
    carsNewsController.addcarnews(req,res,next)
})


route.post("/getnews",(req,res,next) => {
    carsNewsController.getnews(req,res,next)
})

route.post("/getbrandnews/:brand",(req,res,next) => {
    carsNewsController.getBrandNews(req,res,next)
})



// route.post("/expertreviews",(req,res,next) => {
//     carsNewsController.cexpertreviews(req,res,next)
// })

// route.post("/carvideos",(req,res,next) => {
//     carsNewsController.ccarvideos(req,res,next)
// })


module.exports = route