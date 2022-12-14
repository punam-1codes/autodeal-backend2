const route = require('express').Router()
const clientController = require('./carSearch.controller')

// imports controller
// const clientController = require('./clientAuthenticaztion.controller')

// get clients 

// add client routes 
//we get cars data by sort date 
route.post('/search-car', (req, res, next) => {
    clientController.searchCar(req, res, next)

})

//working we get only cars id
route.post('/recentSearch', (req, res, next) => {
    clientController.recentSearch(req, res, next)

})

//working - new added data display
route.post("/get-car-sort-by", (req, res, next) => {
    clientController.carSortBy(req, res, next)
})

//working we get count and car id
route.post("/top-search", (req, res, next) => {
    clientController.topsSearch(req, res, next)
})


//add route for search perticular car using carname
// route.post("/car-search/:car",(req,res,next)=>{
//     clientController.partialCarSearch(req,res,next)
// })




module.exports = route