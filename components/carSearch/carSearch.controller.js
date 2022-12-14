const carModel = require("../carsDetail/carsDetail.model");
const carSeachModel = require("./carSearch.model");

exports.searchCar = async function (req, res, next) {
  let x = req.body.s;
  carModel
    .aggregate([
      { $match: { model: { $regex: new RegExp(x, "i") } } },
      { $project: { _id: 1, model: 1,brand:1, car_id: 1, updatedAt: 1, createdAt: 1 } },
      { $sort: { updatedAt: -1 } },
    ])
    .then((m) => {
      console.log("search car", m);
      if (m.length > 0) {
        let car = m;
        carSeachModel.findOne({ search: req.body.s }).then((t) => {
          console.log("found in srach db", t);

          if (t != null) {
            carSeachModel
              .findOneAndUpdate(
                { search: req.body.s },
                { $inc: { searchcount: 1 } },
                { new: true }
              )
              .then(() => {
                res.status(200).send({
                  success: true,
                  cars: car,
                  err: null,
                });
              })
              .catch((e) => {
                res.status(200).send({
                  success: false,
                  cars: null,
                  err: e,
                });
              });
          } else {
            let newSearch = new carSeachModel({
              search: req.body.s,
            });
            m.forEach((i) => {
              newSearch.matchedCarsId.push(i._id);
            });

            newSearch
              .save()
              .then(() => {
                res.status(200).send({
                  success: true,
                  cars: car,
                  err: null,
                });
              })
              .catch((e) => {
                res.status(200).send({
                  success: false,
                  cars: null,
                  err: e,
                });
              });
          }
        });
      } else {
        res.status(200).send({
          success: true,
          cars: m,
          err: null,
        });
      }
    })
    .catch((e) => {
      res.status(200).send({
        success: false,
        cars: null,
        err: e,
      });
    });
};

exports.recentSearch = async function (req, res, next) {
  await carSeachModel
    .find({})
    .sort({ updatedAt: -1 })
    .limit(10)
    .then((m) => {
      res.status(200).send({
        success: true,
        search: m,
        err: null,
      });
    })
    .catch((e) => {
      res.status(200).send({
        success: false,
        search: null,
        err: e,
      });
    });
};

exports.topsSearch = async function (req, res, next) {
  await carSeachModel
    .aggregate([
      { $project: { _id: 1, search: 1, searchcount: 1 ,model: 1,brand:1, car_id: 1} },
      { $sort: { searchcount: -1 } },
    ])
    .then((m) => {
      res.status(200).send({
        success: true,
        search: m,
        err: null,
      });
    })
    .catch((e) => {
      res.status(200).send({
        success: false,
        search: null,
        err: e,
      });
    });
};

//here we add route for partial car search 
// exports.partialCarSearch = async function (req,res,next){
//   const query1={model:{$regex:req.params.car}}
//   const query2={brand:{$regex:req.params.car}} 
//   await carSeachModel.find({"$or":[query1,query2]}).select({
//     _id: 1,
//     rowstatus: 1,
//     car_id: 1,
//     rows: 1,
//     fuel_type:1,
//     brand:1,
//     varient:1,
//     mileage:1,
//     engine:1,
//     model: 1,
//     seating_capacity:1,
//     transmission:1,
//     price: 1,
//     colours: 1,
//     factors_body_type:1,
//     createdAt: 1,
//   })
//   .then((d)=>{
//     res
//     .status(200)
//     .send({success:true,msg:'data found',error:null,data:d});
//   })
//   .catch((e)=>{
//     res.status(200).send({success:false,msg:null,error:e});
//   })
// }


exports.carSortBy = async function (req, res, next) {
  const brand = req.body.brand;
  const budget = Number(req.body.budget) + 1;
  const vehicleType = req.body.vehicleType;
  const fuelType = req.body.fuelType;
  const mileage = req.body.mileage;
  const seatingCapacity = req.body.seatingCapacity;
  const transmission = req.body.transmission;
  const engineDisplacement = req.body.engineDisplacement;
  const airbags = req.body.airbags;
  const emissionNorms = req.body.emissionNorms;
  const numberOfCylinder = req.body.numberOfCylinder;
  const wheelDrive = req.body.wheelDrive;
  const carRatings = req.body.carRatings;
  const features_Specs = req.body.features_Specs;



  let newArr  = [ { rowstatus: 1 }] 
  req.body.budget != undefined && newArr.push( { price: { $lt: budget } })
  req.body.vehicleType != undefined && newArr.push( { factors_body_type: vehicleType })
  req.body.fuelType != undefined && newArr.push( { factors_fuel_type: fuelType })
  req.body.mileage != undefined && newArr.push( { mileage: mileage })
  req.body.seatingCapacity != undefined && newArr.push( { seating_capacity: seatingCapacity })
  req.body.transmission != undefined && newArr.push( { transmission: transmission })
  req.body.engineDisplacement != undefined && newArr.push( { factors_Displacement_CC: engineDisplacement })
  req.body.airbags != undefined && newArr.push( {   safety_features_airbag: airbags })
  req.body.emissionNorms != undefined && newArr.push( {  factors_emission_standard: emissionNorms })
  req.body.brand != undefined && newArr.push( { brand: brand })
//   req.body.wheelDrive != undefined && newArr.push( { brand: wheelDrive })
    console.log("newArr ======================= >>>>>>>>>>  ",newArr);
  await carModel
    .aggregate([
      {
        $match: {
          $and: newArr,
        },
      },
      {
        $project: {
          _id: 1,
          rowstatus: 1,
          car_id: 1,
          rows: 1,
          brand: 1,
          model: 1,
          varient: 1,
          mileage:1,
          price: 1,
          colours: 1,
          createdAt: 1,
          factors_body_type:1,
          seating_capacity:1
        },
      },
      { $sort: { createdAt: -1 } },
    ])
    .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: "data found", error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    });
};



