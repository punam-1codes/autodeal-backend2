const route = require('express').Router()
const clientController = require('./carSale.controller')

const multer = require('multer');

//save on local project
const localFilePath="./uploads/sellcars_img"
// const serverFilePath=process.env.HOME + "/Desktop/dealmoney-autodealapi/public/sellcarsimg"

const storage=multer.diskStorage({
    destination:localFilePath,
    filename:function(req,file,cb){
        cb(null,Date.now()+'.'+file.mimetype.split("/")[1])
    }
})

const upload = multer({storage:storage})


route.post("/uploadimg", upload.single('file'),(req,res) => {
    clientController.uploadCarImg(req,res) 
})

route.post("/addsellcar",(req,res,next) => {
    clientController.addSellCar(req,res,next)
})



route.post("/getsellcars",(req,res,next) => {
    clientController.getSellCars(req,res,next)
})


route.post("/sellcar/:id",(req,res,next) => {
    clientController.getSellCarById(req,res,next)
})

route.post("/sellcar/delete/:id",(req,res,next) => {
    clientController.removeSellCar(req,res,next)
})


route.post("/sellcar/update/:id",(req,res,next) => {
    clientController.updateSellCar(req,res,next)
})

route.post("/available/sellcar",(req,res,next) => {
    clientController.availableSellCar(req,res,next)
})

//new sell cars
route.post("/latestcars",(req,res,next) => {
    clientController.latestSellCars(req,res,next)
})

//get car by compare price
route.post("/budgetcars/:scprice",(req,res,next) => {
    clientController.budgetSellCars(req,res,next)
})

//update sell car count for get most popular sell car
route.post("/mostviewsellcar/:id",(req,res,next) => {
    clientController.mostViewSellCars(req,res,next)
})

route.post("/getmostviewsellcar",(req,res,next) => {
    clientController.getMostViewSellCars(req,res,next)
})

//get brand and there models 14-11-2022
route.post("/getbrandmodel",(req,res,next) => {
    clientController.getBrandModel(req,res,next)
})

route.post("/filteralldata",(req,res,next) => {
    clientController.filterAllData(req,res,next)
})

route.post("/filteralldatatwoapi",(req,res,next) => {
    clientController.filterAllDataTwoApi(req,res,next)
})


module.exports = route