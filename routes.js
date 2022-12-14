

// imports files
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var clientRouter = require('./components/clientAuthentication/clientAuthenticaztion.routes');
var usersRouter = require('./routes/users');
const constants_1 = require('./config/constant')
const carsRouter = require('./components/carsDetail/carsDetail.routes')
const carSearchRoute = require('./components/carSearch/carSearch.routes')
const carSaleRoute = require('./components/carSale/carSale.routes')
const contactRoutes = require('./components/contactForm/contactForm.routes')
const carNewsRoutes=require('./components/carNews/carsNews.routes')
const carExpertReviewRoutes=require('./components/carExpertReview/carsExpertReview.routes')
const carVideos=require('./components/carVideos/carsVideos.routes')
const customerReviewRoutes=require('./components/customerReview/customerReview.routes')
//carUserReview
const carUserReview=require('./components/carUserReview/carUserReview.routes')
//user
const user=require('./components/user/user.routes')
//test drive
const testdrive=require('./components/testdrive/testdrive.routes')
//inquiries
const inquiries=require('./components/inquiries/inquiries.routes')
//old cars detail
const oldCars=require('./components/oldCarsDetail/oldCarsDetail.routes')

const testService=require('./script/test')




const carsnewsService=require('./script/carsnews')

//dealauto-dashboard
const dashboardService=require('./components/dashboardUser/dashboardUser.routes')

//sellcar book test drive
const sellcarbtd=require('./components/carsaleBookTestdrive/carsaleBookTestdrive.routes')

const ocalteam=require('./components/ocalteam/ocalteam.routes')
const dealmoney=require('./components/Dealmoney/dealmoney.routes')

// build api urls
// constant.js we defined version of url default.API_VERSION=v1
const apiString = `/api/${constants_1.default.API_VERSION}`;
const client_1 = apiString + "/clients";
const cars_1 = apiString+"/cars"
const carSearch_1 = apiString+"/search"
const carSale_1 = apiString+"/car-sale"
const contact_1  = apiString+"/contact"
const carNews_1 = apiString+"/car-news"
const cReview_1 = apiString+"/c-review"
const cExpertReview_1=apiString+"/car-exreview"
const cVideos_1=apiString+"/car-video"
//carUserReview
const carUserReview_1=apiString+"/car-userreview"
//user
const user_1=apiString+"/user"
//testdrive
const testdrive_1=apiString+"/testdrive"
// const test1=apiString+
//inquiries
const inquiries_1=apiString+"/inquiries"

const dashboard_1=apiString+"/dashboard"
//old cars
const oldcars_1=apiString+"/oldcar"

//sellcar book test drive
const sellcarbtd_1=apiString+"/sellcarbtd"

const ocalteam_1=apiString+"/oteam"

const dealmoneyteam_1=apiString+"/dteam"
module.exports = function(app){

app.use(client_1, clientRouter);
app.use(cars_1, carsRouter);
app.use(carSearch_1, carSearchRoute);
app.use(carSale_1, carSaleRoute);
app.use(contact_1, contactRoutes);
app.use(carNews_1, carNewsRoutes);
app.use(cReview_1, customerReviewRoutes);
app.use(cExpertReview_1, carExpertReviewRoutes);
app.use(cVideos_1, carVideos);
//carUserReview
app.use(carUserReview_1, carUserReview);
//user
app.use(user_1, user);
//test drive
app.use(testdrive_1, testdrive);
//inquiries
app.use(inquiries_1, inquiries);
//dashboard
app.use(oldcars_1,oldCars)
//old cars
app.use(dashboard_1,dashboardService)
//sellcar book testdrive
app.use(sellcarbtd_1,sellcarbtd)


app.use(ocalteam_1,ocalteam)
app.use(dealmoneyteam_1,dealmoney)

// app.use(test1,testService)

// app.use('/', indexRouter);
// app.use('/users', usersRouter);




}