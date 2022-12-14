const route = require('express').Router()

const carsController =  require('./carsDetail.controller')

route.post("/allcars",(req,res,next) => {
    carsController.getallcars(req,res,next)
})

route.post("/addcar",(req,res,next) => {
    carsController.addcar(req,res,next)
})

route.post("/car/:id",(req,res,next) => {
    carsController.getcar(req,res,next)
})

route.post("/car/delete/:id",(req,res,next) => {
    carsController.removeCar(req,res,next)
})

route.post("/car/update/:id",(req,res,next) => {
    carsController.updateCar(req,res,next)
})

//get all cars by categories
route.post("/car/categories/:cname",(req,res,next)=>{
    carsController.getcarbycategories(req,res,next)
})

//get cars by brands name
route.post("/car/brands/:brand",(req,res,next)=>{
    carsController.getbrands(req,res,next)
})

//get cars by price or budget  svalue = start value , evalue = end value , check model js file if query is not work change type of price :Number 
route.post("/car/:svalue/:evalue",(req,res,next)=>{
    carsController.getcarbyprice(req,res,next)
})

//get cars by fuel type
route.get("/car/fuel/:fueltype",(req,res,next)=>{
    carsController.getcarfuel(req,res,next)
})

//find your right car page 1 , budget and vehical type api
route.post("/search-by/:sbudget?/:ebudget?/:vtype?",(req,res,next)=>{
    carsController.budgetvtype(req,res,next)
})

//get partial search for car
route.post("/search-car/:car",(req,res,next)=>{
    carsController.getsearchcar(req,res,next)
})

route.post("/filteralldata",(req,res,next)=>{
    carsController.filterallData(req,res,next)
})

//get similar cars using price
// /compare/:price?

// /compare/:bodytype?     -get similar cars by car body-type

// /compare/:price?/:brand?  - get similar cars by price or brand name
route.post("/compare/:price?",(req,res,next)=>{
    carsController.comparebwn(req,res,next)
})

route.post("/matchcriteriadata",(req,res,next)=>{
    carsController.matchcriteriaData(req,res,next)
})

route.post("/matchcriteria/:price?/:enginecc?/:km?",(req,res,next)=>{
    carsController.matchCriteria(req,res,next)
})

//06-04-2022 1st update car_count field by 1
route.post("/updatecount/:id",(req,res,next)=>{
    carsController.updateCount(req,res,next)
})

//06-04-2022 
route.post("/topsearch",(req,res,next)=>{
    carsController.topSearch(req,res,next)
})


//full text search query
route.post("/fulltext",(req,res,next)=>{
    carsController.fullText(req,res,next)
})


//mileage sort from start value to end value
route.post("/mileage-sort/:smileage?/:emileage?",(req,res,next)=>{
    carsController.mileagesort(req,res,next)
})


//engine displacemnt
route.post("/displacement-cc/:scc?/:ecc?",(req,res,next)=>{
    carsController.displacementsort(req,res,next)
})

route.post("/filterall/:sbrand?/:sSvalue?/:sEvalue?/:vtype?/:ftype?/:mStart?/:mEnd?/:scapacity?/:transmission?/:eDisplacement?/:airbags?/:eNorms?",(req,res,next)=>{
    carsController.allsearch(req,res,next)
})

route.post("/filterallnew/:sbrand?/:sSvalue?/:sEvalue?/:vtype?/:ftype?/:mStart?/:mEnd?/:scapacity?/:transmission?/:eDisplacement?/:airbags?/:eNorms?",(req,res,next)=>{
    carsController.allsearchnew(req,res,next)
})

//getallcarsprice
// route.post("/allcarsprice",(req,res,next) => {
//     carsController.getallcarsprice(req,res,next)
// })

//match criteria 26-03-2022 (wireframes page 12 - 7 Varients Matching Your Search Criteria )
// /:btype?/:ftype?/:price?/:enginecc?/:km?

// route.post("/matchcriteria/:brand?/:btype?/:ftype?/:enginecc?/:km?/:price?",(req,res,next)=>{
//     carsController.matchCriteria(req,res,next)
// })


// route.post("/matchcriteria/:brand?/:btype?/:ftype?/:enginecc?/:km?/:price?",(req,res,next)=>{
//     carsController.matchCriteria(req,res,next)
// })

//allsearch api
// /:noCylinder
// /filterall/:sbrand?/:sSvalue?/:sEvalue?/:vtype?/:ftype?/:mileage?/:scapacity?/:transmission?/:eDisplacement?/:airbags?/:eNorms?

// route.post("/filterall/:sbrand?/:sSvalue?/:sEvalue?/:vtype?/:ftype?/:mileage?/:scapacity?/:transmission?/:eDisplacement?/:airbags?/:eNorms?",(req,res,next)=>{
//     carsController.allsearch(req,res,next)
// })


//for test
// route.post("/aggegate",(req,res,next)=>{
//     carsController.aggegateData(req,res,next)
// })

//for page no 13 in adobexd car price and model name 
route.post("/getbranddetails",(req,res,next)=>{
    carsController.getbranddetailsData(req,res,next)
})


//for page no 18 get all varient of cars
route.post("/getallvarients",(req,res,next)=>{
    carsController.getallvarientsData(req,res,next)
})


//page no 33 for more car options to consider
route.post("/getselectedcar",(req,res,next)=>{
    carsController.getselectedcarData(req,res,next)
})



route.post("/filteralldatatwo",(req,res,next)=>{
    carsController.filterallDataTwo(req,res,next)
})



route.post("/brandprice",(req,res,next)=>{
    carsController.brandandprice(req,res,next)
})

//get all cars by car categories
route.post("/allCarCategories",(req,res,next)=>{
    carsController.allCarCategoriesData(req,res,next)
})


//get car by car_id
route.post("/carid",(req,res,next) => {
    carsController.getcarIdData(req,res,next)
})

route.post("/comparebtypeprice/:btype/:price?",(req,res,next)=>{
    carsController.compareBtypePrice(req,res,next)
})


//get all cars brand data
route.post("/allbrands",(req,res,next)=>{
    carsController.allBrandData(req,res,next)
})

//get object by varinent and price
route.post("/getcarobject",(req,res,next)=>{
    carsController.getCarObjectData(req,res,next)
})


//get all cars by price with first object that start from data
route.post("/allcarsbyprice",(req,res,next)=>{
    carsController.allCarsByPrice(req,res,next)
})



//core ui angular charts
//get allbrand name and count
route.post("/brandcount",(req,res,next)=>{
    carsController.allBrandCount(req,res,next)
})

route.post("/brandmodel",(req,res,next)=>{
    carsController.brandModel(req,res,next)
})


route.post("/brandvarient",(req,res,next)=>{
    carsController.brandVarient(req,res,next)
})


//get cars model varient
route.post("/getbrandmodel",(req,res,next)=>{
    carsController.getBrandModel(req,res,next)
})


//get cars model varient
route.post("/getbrandmodelvarient",(req,res,next)=>{
    carsController.getBrandModelVarient(req,res,next)
})










module.exports = route