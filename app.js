var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
const mongooose = require('mongoose')

//add async
const async = require('async');

//cors
var cors = require('cors')


var app = express();

app.use(express.static(path.join(__dirname, 'public')));
// imports files 

const routes_1 = require('./routes')
const DB_1 = require("./db/db")

// import database file
try {
  DB_1(mongooose)

} catch (error) {
  console.log("error >>> ", error);
}


app.use(express.static(path.join(__dirname, "/public"), { maxAge: 31557600000000 }));
// try {
//   const mongoUrl = 'mongodb://192.168.1.44:27017/myapp';
//   // mongoose.connect("mongodb://localhost:27017/myapp",(err)=>
//   // mongoose.connect("mongodb://192.168.1.44/myapp",(err)=>
//   // const mongoUrl = 'mongodb://127.0.0.1:27017/myapp';

//   mongooose.connect(mongoUrl,
// (err) => 
//   {
//       if(err) {
//           console.log(`Error >>> `,err);
//       } else {
//           console.log("DB is connected");
//       }
//   })
// } catch (error) {
//   console.log(`Error >>> `,error);    }


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//cors use here
app.use(cors())

// use roures file for RESTful Mapping

routes_1(app);

//browser default port localhost:3000 
app.get('/', (req, res) => {
  console.log("database call");
  res.jsonp({success : true})
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.end('this is working');
  // render the error page
  res.status(err.status || 500);

  res.render('error');
});






module.exports = app;
