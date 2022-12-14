const Cars = require("./carsDetail.model");
const { nanoid } = require("nanoid");
const { translateAliases } = require("../carSale/carSale.model");
const { rejectSeries } = require("async");

exports.getallcars = async function (req, res, next) {
  await Cars.aggregate([
    { $match: { rowstatus: 1 } },
    // {
    //   $project: {
    //     _id: 1,
    //     rowstatus: 1,
    //     // car_img:1,
    //     // car_review:1,
    //     car_id: 1,
    //     rows: 1,
    //     model: 1,
    //     varient: 1,
    //     brand:1,
    //     colours: 1,
    //     pictures:1,
    //     factors_displacement_cc:1,
    //     createdAt: 1,
    //     factors_body_type:1,
    //     price: 1,
    //     mileage:1,
    //     price_print:1,
    //     mileage_print:1

    //   },
    // },
    // { $sort: { createdAt: -1 } },
    { $sort: { model: 1 } },
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

exports.getcar = async function (req, res, next) {
  await Cars.findById(req.params.id)
    .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: "data found", error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    });


};

//get all cars by car categories
exports.getcarbycategories= async function(req,res,next){
  var query={"factors_body_type":req.params.cname}
  // await Cars.find(query).select({
  //       _id: 1,
  //       rowstatus: 1,
  //       car_id: 1,
  //       // car_review:1,
  //       rows: 1,
  //       factors_body_type:1,
  //       brand:1,
  //       varient:1,
  //       engine:1,
  //       fuel_type:1,
  //       model: 1,
  //       seating_capacity:1,
  //       transmission:1,
  //       price: 1,
  //       price_print:1,
  //       mileage:1,
  //       mileage_print:1,
  //       colours: 1,
  //       pictures:1,
  //       factors_displacement_cc:1,
  //       createdAt: 1,
  // })
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query]} },
    {
      $project: {
        _id: 1,
        rowstatus: 1,
        car_id: 1,
        // car_review:1,
        rows: 1,
        factors_body_type:1,
        brand:1,
        varient:1,
        engine:1,
        fuel_type:1,
        model: 1,
        seating_capacity:1,
        transmission:1,
        price: 1,
        price_print:1,
        mileage:1,
        mileage_print:1,
        colors: 1,
        pictures:1,
        factors_displacement_cc:1,
        createdAt: 1,
        capacities_seating_capacity:1,
        safety_features_airbag:1,
        factors_emission_standard:1,
        
      },
    },
    // { $sort: { createdAt: -1 } },
  ])


  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
    .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: 'data found', error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    })
}




//get all cars by car brands name 
exports.getbrands= async function(req,res,next){
  var query={"brand":req.params.brand}
  // await Cars.find(query).select({
  //       _id: 1,
  //       rowstatus: 1,
  //       car_id: 1,
  //       // car_review:1,
  //       rows: 1,
  //       // car_img:1,
  //       brand:1,
  //       varient:1,
  //       mileage:1,
  //       engine:1,
  //       fuel_type:1,
  //       model: 1,
  //       seating_capacity:1,
  //       transmission:1,
  //       price: 1,
  //       price_print:1,
  //       mileage_print:1,
  //       colours: 1,
  //       factors_body_type:1,
  //       pictures:1,
  //       factors_displacement_cc:1,
  //       createdAt: 1,
  // })
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query]} },
    {
      $project: {
        _id: 1,
        rowstatus: 1,
        car_id: 1,
        // car_review:1,
        rows: 1,
        // car_img:1,
        brand:1,
        varient:1,
        mileage:1,
        engine:1,
        fuel_type:1,
        model: 1,
        seating_capacity:1,
        transmission:1,
        price: 1,
        price_print:1,
        mileage_print:1,
        colours: 1,
        factors_body_type:1,
        pictures:1,
        factors_displacement_cc:1,
        createdAt: 1,
      },
    },
    // { $sort: { createdAt: -1 } },
  ])


  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
    // .then((d) => {
    //   res
    //     .status(200)
    //     .send({ success: true, msg: 'data found', error: null, data: d });
    // })
    // .catch((e) => {
    //   res.status(200).send({ success: false, msg: null, error: e });
    // })
}

//get all cars by fuel type
exports.getcarfuel= async function(req,res,next){
  var query={"fuel_type":req.params.fueltype}
  // await Cars.find(query).select({
  //   _id: 1,
  //   rowstatus: 1,
  //   car_id: 1,
  //   // car_review:1,
  //   rows: 1,
  //   fuel_type:1,
  //   // car_img:1,
  //   brand:1,
  //   varient:1,
  //   mileage:1,
  //   engine:1,
  //   model: 1,
  //   seating_capacity:1,
  //   transmission:1,
  //   price: 1,
  //   price_print:1,
  //   mileage_print:1,
  //   colours: 1,
  //   factors_body_type:1,
  //   pictures:1,
  //   factors_displacement_cc:1,
  //   createdAt: 1,
  // })
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query]} },
    {
      $project: {
         _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    fuel_type:1,
    // car_img:1,
    brand:1,
    varient:1,
    mileage:1,
    engine:1,
    model: 1,
    seating_capacity: 1,
    transmission: 1,
    price: 1,
    price_print:1,
    mileage_print:1,
    colours: 1,
    factors_body_type:1,
    pictures:1,
    factors_displacement_cc:1,
    createdAt: 1,
      },
    },
    // { $sort: { createdAt: -1 } },
  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}

//here we get car price in between range 
exports.getcarbyprice= async function(req,res,next){
  var svalueNo=Number(req.params.svalue)
  var evalueNo=Number(req.params.evalue)
  var query={price:{$gte:svalueNo,$lte:evalueNo}}
  console.log("data ",query);
  // await Cars.find(query).select({
  //   _id: 1,
  //   rowstatus: 1,
  //   car_id: 1,
  //   // car_review:1,
  //   rows: 1,
  //   fuel_type:1,
  //   // car_img:1,
  //   brand:1,
  //   varient:1,
  //   mileage:1,
  //   engine:1,
  //   model: 1,
  //   seating_capacity:1,
  //   transmission:1,
  //   price_print:1,
  //   price: 1,
  //   mileage_print:1,
  //   colours: 1,
  //   factors_body_type:1,
  //   pictures:1,
  //   factors_displacement_cc:1,
  //   createdAt: 1,
  // })
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query]} },
    {
      $project: {
     _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    fuel_type:1,
    // car_img:1,
    brand:1,
    varient:1,
    mileage:1,
    engine:1,
    model: 1,
    seating_capacity: 1,
    transmission: 1,
    price_print: 1,
    price: 1,
    mileage_print:1,
    colours: 1,
    factors_body_type:1,
    pictures:1,
    factors_displacement_cc:1,
    createdAt: 1,
      },
    },
    // { $sort: { createdAt: -1 } },
  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}


//-------------------------------------------------------------



exports.addcar = async function (req, res, next) {
  // console.log(x);
  // let genrateId = x.slice(11)+Math.random().toString().slice(5,7)
  let genrateId = nanoid(6);
  // console.log("s--------------",genrateId);
  let ncar = new Cars({
    
    car_id: genrateId,
    // car_img:req.body.car_img,
    // car_review:req.body.car_review,
    model: req.body.model,
    brand: req.body.brand,
    varient: req.body.varient,
    price_print: req.body.price_print,
    price: req.body.price,
    mileage_print: req.body.mileage_print,
    mileage: req.body.mileage,
    engine: req.body.engine,
    transmission: req.body.transmission,
    fuel_type: req.body.fuel_type,
    seating_capacity: req.body.seating_capacity,
    // colors: req.body.colors,
    colors: [],
    pictures: [],
    factors_body_type: req.body.factors_body_type,
    factors_fuel_type: req.body.factors_fuel_type,
    factors_segment: req.body.factors_segment,
    factors_transmission: req.body.factors_transmission,
    factors_engine: req.body.factors_engine,
    factors_no_of_gears: req.body.factors_no_of_gears,
    factors_displacement_cc: req.body.factors_displacement_cc,
    factors_emission_standard: req.body.factors_emission_standard,
    performance_peak_power_bhp_max_rpm:
      req.body.performance_peak_power_bhp_max_rpm,
    performance_peak_torque_nm_max_rpm:
      req.body.performance_peak_torque_nm_max_rpm,
    performance_mileage_city_highway_in_kmpl:
      req.body.performance_mileage_city_highway_in_kmpl,
    dimensions_length_mm: req.body.dimensions_length_mm,
    dimensions_width_mm: req.body.dimensions_width_mm,
    dimensions_height_mm: req.body.dimensions_height_mm,
    dimensions_weelbase_mm: req.body.dimensions_weelbase_mm,
    dimensions_boot_space_l: req.body.dimensions_boot_space_l,
    dimensions_ground_clearance_mm: req.body.dimensions_ground_clearance_mm,
    dimensions_kerb_weight_kgs: req.body.dimensions_kerb_weight_kgs,
    dimensions_turning_radius_m: req.body.dimensions_turning_radius_m,
    key_features_air: req.body.key_features_air,
    key_features_central_locking: req.body.key_features_central_locking,
    key_features_power_steering: req.body.key_features_power_steering,
    key_features_steering_adjustment_rake_reach:
      req.body.key_features_steering_adjustment_rake_reach,
    key_features_steering_mounted_controls:
      req.body.key_features_steering_mounted_controls,
    key_features_remote_controlled_boot:
      req.body.key_features_remote_controlled_boot,
    key_features_leather_seats: req.body.key_features_leather_seats,
    key_features_cruise_control: req.body.key_features_cruise_control,
    key_features_climate_control: req.body.key_features_climate_control,
    key_features_cd_player: req.body.key_features_cd_player,
    key_features_power_windows: req.body.key_features_power_windows,
    key_features_electrically_adjustable_driver_seat:
      req.body.key_features_electrically_adjustable_driver_seat,
    key_features_rear_ac_vent: req.body.key_features_rear_ac_vent,
    key_features_rear_wiper: req.body.key_features_rear_wiper,
    key_features_electrically_adjustable_mirrors:
      req.body.key_features_electrically_adjustable_mirrors,
    safety_features_anti_lock_braking_system_abs:
      req.body.safety_features_anti_lock_braking_system_abs,
    safety_features_parking_sensors: req.body.safety_features_parking_sensors,
    safety_features_airbag: req.body.safety_features_airbag,
    safety_features_traction_control: req.body.safety_features_traction_control,
    capacities_fuel_capacity_l: req.body.capacities_fuel_capacity_l,
    capacities_seating_capacity: req.body.capacities_seating_capacity,
    // capacities: req.body.capacities,
    wheels_and_tyres_Tyre_specs_front:
      req.body.wheels_and_tyres_Tyre_specs_front,
    wheels_and_tyres_Tyre_specs_rear: req.body.wheels_and_tyres_Tyre_specs_rear,
    tags: []
  });
  //for array field 
  ncar.colors = req.body.colors
  ncar.pictures = req.body.pictures
  ncar.tags = req.body.tags
  await ncar
    .save()
    .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: "new car is added", error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    });
};

exports.removeCar = async function (req, res, next) {
  // await Cars.findByIdAndRemove(
  await Cars.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        rowstatus: 0,
      },
    },
    { new: true }
  )
    .then(() => {
      // console.log(data);
      res.status(200).send({ success: true, msg: "car is removed", err: null });
    })
    .catch((e) =>
      res
        .status(200)
        .send({ success: false, msg: "something went wrong", err: e })
    );
};

exports.updateCar = async function (req, res, next) {
  await Cars.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        brand:req.body.brand,
        car_count:req.body.car_count,
        // car_img:req.body.car_img,
        // car_review:req.body.car_review,
        model: req.body.model,
        varient: req.body.varient,
        price_print: req.body.price_print,
        price: req.body.price,
        colors: req.body.colors,
        pictures: req.body.pictures,
        mileage_print: req.body.mileage_print,
        mileage: req.body.mileage,
        engine: req.body.engine,
        transmission: req.body.transmission,
        fuel_type: req.body.fuel_type,
        seating_capacity: req.body.seating_capacity,
        colors: req.body.colors,
        factors_body_type: req.body.factors_body_type,
        factors_fuel_type: req.body.factors_fuel_type,
        factors_segment: req.body.factors_segment,
        factors_transmission: req.body.factors_transmission,
        factors_engine: req.body.factors_engine,
        factors_no_of_gears: req.body.factors_no_of_gears,
        factors_displacement_cc: req.body.factors_displacement_cc,
        factors_emission_standard: req.body.factors_emission_standard,
        performance_peak_power_bhp_max_rpm:
          req.body.performance_peak_power_bhp_max_rpm,
        performance_peak_torque_nm_max_rpm:
          req.body.performance_peak_torque_nm_max_rpm,
        performance_mileage_city_highway_in_kmpl:
          req.body.performance_mileage_city_highway_in_kmpl,
        dimensions_length_mm: req.body.dimensions_length_mm,

        dimensions_height_mm: req.body.dimensions_height_mm,

        dimensions_width_mm: req.body.dimensions_width_mm,

        dimensions_weelbase_mm: req.body.dimensions_weelbase_mm,
        dimensions_boot_space_l: req.body.dimensions_boot_space_l,
        dimensions_ground_clearance_mm: req.body.dimensions_ground_clearance_mm,
        dimensions_kerb_weight_kgs: req.body.dimensions_kerb_weight_kgs,
        dimensions_turning_radius_m: req.body.dimensions_turning_radius_m,
        key_features_air: req.body.key_features_air,
        key_features_central_locking: req.body.key_features_central_locking,
        key_features_power_steering: req.body.key_features_power_steering,
        key_features_steering_adjustment_rake_reach:
          req.body.key_features_steering_adjustment_rake_reach,
        key_features_steering_mounted_controls:
          req.body.key_features_steering_mounted_controls,
        key_features_remote_controlled_boot:
          req.body.key_features_remote_controlled_boot,
        key_features_leather_seats: req.body.key_features_leather_seats,
        key_features_cruise_control: req.body.key_features_cruise_control,
        key_features_climate_control: req.body.key_features_climate_control,
        key_features_cd_player: req.body.key_features_cd_player,
        key_features_power_windows: req.body.key_features_power_windows,
        key_features_Electrically_adjustable_driver_seat:
          req.body.key_features_Electrically_adjustable_driver_seat,
        key_features_rear_ac_vent: req.body.key_features_rear_ac_vent,
        key_features_rear_wiper: req.body.key_features_rear_wiper,
        key_features_electrically_adjustable_mirrors:
          req.body.key_features_electrically_adjustable_mirrors,

        safety_features_anti_Lock_braking_system_abs:
          req.body.safety_features_anti_Lock_braking_system_abs,
        safety_features_parking_sensors:
          req.body.safety_features_parking_sensors,
        safety_features_airbag: req.body.safety_features_airbag,
        safety_features_traction_control:
          req.body.safety_features_traction_control,
        capacities_fuel_capacity_l: req.body.capacities_fuel_capacity_l,
        capacities_seating_capacity: req.body.capacities_seating_capacity,
        // capacities: req.body.capacities,
        wheels_and_tyres_Tyre_specs_front:
          req.body.wheels_and_tyres_Tyre_specs_front,
        wheels_and_tyres_Tyre_specs_rear:
          req.body.wheels_and_tyres_Tyre_specs_rear,
        tags: req.body.tags,

      },
    },
    { new: true }
  )
    .then((data) => {
      console.log(data);
      res
        .status(200)
        .send({ success: true, msg: "data is updates", data: data, err: null });
    })
    .catch((e) =>
      res
        .status(200)
        .send({
          success: false,
          msg: "something went wrong",
          data: null,
          err: e,
        })
    );
};



exports.getsearchcar = async function (req, res, next) {

  var pw = req.params.car
  //convert params into array using split(" ")
  var pe = pw.split(" ")
  //set 1st word of array strings in Capital
  var pr = pe.map(e => { return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase(); })
  //convert array to string and remove comma into space
  var cartext = pr.join(" ")
  // var pr=pe.charAt(0).toUpperCase()+pe.slice(1)

  console.log("params car last value", cartext);

  const query1={model:{$regex:cartext}} 
  const query2={brand:{$regex:cartext}} 
  const query3={tags:{$regex:cartext}}
  const query4={varient:{$regex:cartext}}
  // await Cars.find({"$or":[query1,query2,query3]}).select({
  //   _id: 1,
  //   rowstatus: 1,
  //   car_id: 1,
  //   // car_review:1,
  //   rows: 1,
  //   fuel_type:1,
  //   // car_img:1,
  //   brand:1,
  //   varient:1,
  //   mileage:1,
  //   engine:1,
  //   model: 1,
  //   seating_capacity:1,
  //   transmission:1,
  //   price: 1,
  //   price_print:1,
  //   mileage_print:1,
  //   colours: 1,
  //   factors_body_type:1,
  //   pictures:1,
  //   factors_displacement_cc:1,
  //   createdAt: 1,
  //   tags:1
  // })

  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},{"$or":[query1,query2,query3,query4]}]} },
    {
      $project: {
    _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    fuel_type:1,
    // car_img:1,
    brand:1,
    varient:1,
    mileage:1,
    engine:1,
    model: 1,
    seating_capacity: 1,
    transmission: 1,
    price: 1,
    price_print:1,
    mileage_print:1,
    colours: 1,
    factors_body_type:1,
    pictures:1,
    factors_displacement_cc:1,
    createdAt: 1,
    tags:1
      },
    },
    // { $sort: { createdAt: -1 } },
  ])


  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
    .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: 'data found', error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    })
}


//find your right car 1st api 
exports.budgetvtype= async function(req,res,next){
  sbudgetNo=Number(req.params.sbudget)
  ebudgetNo=Number(req.params.ebudget)
  var query1={price:{$gte:sbudgetNo || 4,$lte:ebudgetNo || 700}} 
  var query2={"factors_body_type":req.params.vtype || ["MUV","SUV","Roadster","Crossover","Estate","Coupe","Hatchback","Sedan"] }

  // if we use $and then both condition well be have true then it execute but that type all vehical type not use , but we have user can get data by budget

  // await Cars.find({"$and":[query1,query2]}).select({
  //   _id: 1,
  //   rowstatus: 1,
  //   car_id: 1,
  //   // car_review:1,
  //   rows: 1,
  //   fuel_type:1,
  //   // car_img:1,
  //   brand:1,
  //   varient:1,
  //   mileage:1,
  //   engine:1,
  //   model: 1,
  //   seating_capacity:1,
  //   transmission:1,
  //   price: 1,
  //   price_print:1,
  //   mileage_print:1,
  //   colours: 1,
  //   factors_body_type:1,
  //   pictures:1,
  //   factors_displacement_cc:1,
  //   createdAt: 1,
  // })
  
  //here we chnage "$or" to "$and" compaire query1 and query2
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},{"$and":[query1,query2]}]} },
    {
      $project: {
      _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    fuel_type:1,
    // car_img:1,
    brand:1,
    varient:1,
    mileage:1,
    engine:1,
    model: 1,
    seating_capacity: 1,
    transmission: 1,
    price: 1,
    price_print:1,
    mileage_print:1,
    colours: 1,
    factors_body_type:1,
    pictures:1,
    factors_displacement_cc:1,
    createdAt: 1,
      },
    },
    // { $sort: { createdAt: -1 } },
  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}


//all search api
exports.allsearch= async function(req,res,next){
  
  var m_in_number=Number(req.params.mileage)

  var cc_in_number=Number(req.params.eDisplacement)
 
  var query1={"brand":req.params.sbrand || ['MG','Hyundai']}
  var query2={"price":{$gte:req.params.sSvalue || 5 , $lte:req.params.sEvalue || 10}}
  var query3={"factors_body_type":req.params.vtype || ["MUV","SUV","Roadster","Crossover","Estate","Coupe","Hatchback","Sedan"] }
  var query4={"fuel_type":req.params.ftype || ["Petrol","Diesel","CNG","Electric"]}
  var query5={"mileage": {$gte:req.params.mStart || 5 , $lte:req.params.mEnd || 30}}
  var query6={"capacities_seating_capacity":req.params.scapacity || ["2","3","4","5","6","7","8","9","10","11","12","13","14","15"]}
  var query7={"transmission":req.params.transmission || ["Manual","Automatic"]}
  var query8={"factors_Displacement_CC":cc_in_number || [999,1086,1500,1197]}
  var query9={"safety_features_airbag":req.params.airbags || ["Yes","No"]}
  var query10={"factors_emission_standard":req.params.eNorms || ["BS4","BS6","BS7"]}
 
  console.log("hiii get data------",req.params.sbrand);

  // await Cars.find({"$and":[{brand:req.params.sbrand},{price:{$gte:req.params.sSvalue,$lte:req.params.sEvalue}},{factors_body_type:req.params.vtype}]}).select({
  await Cars.find({ "$and": [query1, query2, query3, query4, query5, query6, query7, query8, query9, query10] }).select({
    _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    brand:1,
    // car_img:1,
    price: 1,
    price_print:1,
    mileage_print:1,
    factors_body_type:1,
    fuel_type:1,
    mileage:1,
    seating_capacity:1,
    transmission:1,
    factors_Displacement_CC:1,
    safety_features_airbag:1,
    factors_emission_standard:1,
    factors_displacement_cc:1,
    colours: 1,
    pictures:1,
    varient:1,
    engine:1,
    model: 1,
    colours: 1,
    factors_body_type: 1,
    capacities_seating_capacity: 1,
    createdAt: 1,
  })
  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}





//new searchall

//all search api
exports.allsearchnew= async function(req,res,next){

  var ssvalue=Number(req.params.sSvalue)
  console.log("here we get mstart",ssvalue);
  
  var m_in_number=Number(req.params.mStart)
  

  var cc_in_number=Number(req.params.eDisplacement)
 
  var query1={"brand":req.params.sbrand || ['MG','Hyundai']}
  var query2={"price":{$gte:req.params.sSvalue || 5 , $lte:req.params.sEvalue || 10}}
  var query3={"factors_body_type":req.params.vtype || ["MUV","SUV","Roadster","Crossover","Estate","Coupe","Hatchback","Sedan"] }
  var query4={"fuel_type":req.params.ftype || ["Petrol","Diesel","CNG","Electric"]}
  var query5={"mileage": {$gte:req.params.mStart || 5 , $lte:req.params.mEnd || 30}}
  var query6={"capacities_seating_capacity":req.params.scapacity || ["2","3","4","5","6","7","8","9","10","11","12","13","14","15"]}
  var query7={"transmission":req.params.transmission || ["Manual","Automatic"]}
  var query8={"factors_Displacement_CC":cc_in_number || [999,1086,1500,1197]}
  var query9={"safety_features_airbag":req.params.airbags || ["Yes","No"]}
  var query10={"factors_emission_standard":req.params.eNorms || ["BS4","BS6","BS7"]}
 
  console.log("hiii get data------",req.params.sbrand);

  // await Cars.find({"$and":[{brand:req.params.sbrand},{price:{$gte:req.params.sSvalue,$lte:req.params.sEvalue}},{factors_body_type:req.params.vtype}]}).select({
  await Cars.find({"$and":[query1,query2,query3,query4,query5,query6,query7,query8,query9,query10]}).select({
    _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    brand:1,
    // car_img:1,
    price: 1,
    price_print:1,
    mileage_print:1,
    factors_body_type:1,
    fuel_type:1,
    mileage:1,
    seating_capacity:1,
    transmission:1,
    factors_Displacement_CC:1,
    safety_features_airbag:1,
    factors_emission_standard:1,
    factors_displacement_cc:1,
    colours: 1,
    pictures:1,
    varient:1,
    engine:1,
    model: 1,
    colours: 1,
    factors_body_type:1,
    capacities_seating_capacity:1,
    createdAt: 1,
  })
  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}




//using body
//all search api
exports.filterallData= async function(req,res,next){

  
  // var pw=req.params.car
  // //convert params into array using split(" ")
  // var pe=pw.split(" ")
  // //set 1st word of array strings in Capital
  // var pr=pe.map(e=>{return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase();})
  // //convert array to string and remove comma into space
  // var cartext=pr.join(" ")
  // var pr=pe.charAt(0).toUpperCase()+pe.slice(1)

  // var a=req.body
  // var bran=req.body.brand
  // var brann=bran.split(" ")
  // var brannn=brann.join(" ")
  // console.log("brnad value in array",brannn);

  
  
  var brandA={"brand":req.body.brand || ['Hyundai','Datsun','RollsRoyce','Lamborghini','Porsche','Nissan','MercedesBenz','Mahindra','Audi','Kia','Skoda','Volkswagen','Ferrari','Maserati','Bentley','AstonMartin','Isuzu','Volvo','Honda','Maruti','Tata','Ford','Renault','BMW','MG','Jeep','Jaguar','MINI','Lexus']}
  var vtypeA={"factors_body_type":req.body.factors_body_type || ["MUV","SUV","Roadster","Crossover","Estate","Coupe","Hatchback","Sedan","","N/A","NA","-"]}
  var scapacityA={"capacities_seating_capacity":req.body.capacities_seating_capacity || ["2","3","4","5","6","7","8","9","10","11","12","13","14","15","","N/A","NA","-"]}
  var transmissionA={"transmission":req.body.transmission || ["Manual","Automatic","","N/A","NA","-"]}
  var safetyA={"safety_features_airbag":req.body.safety_features_airbag || ["Yes","No","","N/A","NA","-"]}
  var emissionA={"factors_emission_standard":req.body.factors_emission_standard || ["BS4","BS6","BS7","","N/A","NA","-"]}
  var fuelA={"fuel_type":req.body.fuel_type || ["Petrol","Diesel","CNG","Electric","","N/A","NA","-"]}
  var priceA={"price":{$gte:req.body.price_sSvalue || 1 , $lte:req.body.price_sEvalue || 1000}}
  var mileageA={"mileage": {$gte:req.body.mileage_start || 1 , $lte:req.body.mileage_end || 100}}
  var fdccA={"factors_displacement_cc":{$gte:req.body.fdcc_start || 1 , $lte:req.body.fdcc_end || 10000}}

  console.log("here we get request",req.body.factors_body_type);

  // await Cars.find({"$and":[{brand:req.params.sbrand},{price:{$gte:req.params.sSvalue,$lte:req.params.sEvalue}},{factors_body_type:req.params.vtype}]}).select({
  await Cars.find({"$and":[{rowstatus: 1},vtypeA,scapacityA,brandA,transmissionA,safetyA,emissionA,fuelA,priceA,mileageA,fdccA]}).select({
    _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    brand:1,
    // car_img:1,
    price: 1,
    price_print:1,
    mileage_print:1,
    factors_body_type:1,
    fuel_type:1,
    mileage:1,
    seating_capacity:1,
    transmission:1,
    factors_Displacement_CC:1,
    safety_features_airbag:1,
    factors_emission_standard:1,
    factors_displacement_cc:1,
    colours: 1,
    pictures:1,
    varient:1,
    engine:1,
    model: 1,
    colours: 1,
    factors_body_type:1,
    capacities_seating_capacity:1,
    createdAt: 1,
  })

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}





//matchcriteriaData

exports.matchcriteriaData= async function(req,res,next){
  var a=req.body

  // var priceA={"price":{$gte:req.body.sSvalue || 1 , $lte:req.body.price_sEvalue || 1000}}
  // var fdccA={"factors_displacement_cc":{$gte:req.body.fdcc_start || 1 , $lte:req.body.fdcc_end || 10000}}
  // var mileageA={"mileage": {$gte:req.body.mileage_start || 1 , $lte:req.body.mileage_end || 100}}

  // var rowstatus={rowstatus: 1}
  // var priceA={"price":{$gte:req.body.sSvalue}}
  // var fdccA={"factors_displacement_cc":{$gte:req.body.fdcc_start  }}
  // var mileageA={"mileage": {$gte:req.body.mileage_start }}

  var modelA={"model":req.body.model}

  console.log("here we get request",req.body);

  // await Cars.find({"$and":[{brand:req.params.sbrand},{price:{$gte:req.params.sSvalue,$lte:req.params.sEvalue}},{factors_body_type:req.params.vtype}]}).select({
  // await Cars.find({"$and":[{rowstatus:1},priceA,mileageA,fdccA]}).select({
  //   _id: 1,
  //   rowstatus: 1,
  //   car_id: 1,
  //   // car_review:1,
  //   rows: 1,
  //   brand:1,
  //   // car_img:1,
  //   price: 1,
  //   price_print:1,
  //   mileage_print:1,
  //   factors_body_type:1,
  //   fuel_type:1,
  //   mileage:1,
  //   seating_capacity:1,
  //   transmission:1,
  //   factors_Displacement_CC:1,
  //   safety_features_airbag:1,
  //   factors_emission_standard:1,
  //   factors_displacement_cc:1,
  //   colours: 1,
  //   pictures:1,
  //   varient:1,
  //   engine:1,
  //   model: 1,
  //   colours: 1,
  //   factors_body_type:1,
  //   capacities_seating_capacity:1,
  //   createdAt: 1,
  // })

  //here we change match critriteria for price , factor_d_cc ,and mileage 
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},modelA]} },
    {
      $project: {
        _id: 1,
        rowstatus: 1,
        car_id: 1,
        // car_review:1,
        rows: 1,
        brand:1,
        // car_img:1,
        price: 1,
        price_print:1,
        mileage_print:1,
        factors_body_type:1,
        fuel_type:1,
        mileage:1,
        seating_capacity:1,
        transmission:1,
        factors_Displacement_CC:1,
        safety_features_airbag:1,
        factors_emission_standard:1,
        factors_displacement_cc:1,
        colours: 1,
        pictures:1,
        varient:1,
        engine:1,
        model: 1,
        colours: 1,
        factors_body_type:1,
        capacities_seating_capacity:1,
        createdAt: 1,
      },
    },
    {$limit:7},
    { $sort: { price: 1 } },
  ])



  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}










//get similar car by price 
exports.comparebwn = async function (req, res, next) {
  //here we get similar car by body_type of car
  // await Cars.aggregate([{"$match" : { "factors_body_type" : req.params.bodytype}},{$project:{
  //   price:1,
  //   model:1,
  //   factors_body_type:1,
  //   brand:1
  // }}])


  // Get Similar car by price and brand but pass 2 value at time of calling api
  // await Cars.aggregate([{"$match" : { "price" : priceInNumber || 200,"brand":req.params.brand || ["Mini","Bugatti"]}},{$project:{
  //   price:1,
  //   model:1,
  //   factors_body_type:1,
  //   brand:1
  // }}])

  //here we get simlilar car by price
  var a=req.params.price
  var priceInNumber=Number(a)
  query1={ "price" : {$gte:priceInNumber}}
  console.log("ge data by user",typeof(b));
  // await Cars.aggregate([{"$match" : { "price" : priceInNumber || 200}},{$project:{
  //   price:1,
  //   model:1,
  //   factors_body_type:1,
  //   // car_img:1,
  //   brand:1,
  //   mileage:1,
  //   price_print:1,
  //   mileage_print:1,
  //   colours: 1,
  //   pictures:1,
  //   factors_displacement_cc:1,
  // }}])

  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1]} },
    // {
    //   $project: {
    // _id:1,
    // rowstatus: 1,
    // price:1,
    // model:1,
    // factors_body_type:1,
    // // car_img:1,
    // brand:1,
    // mileage:1,
    // price_print:1,
    // mileage_print:1,
    // colors: 1,
    // pictures:1,
    // factors_displacement_cc:1,
    //   },
    // },
    { $sort: { price: 1 } },
  ])


  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}


//cb function 
// function getprice (cb) {
//   var abc=[]
//   Cars.aggregate([
//     {
//       "$match": {
//         rowstatus:1
//     }
//     },
//     {
//           $project: {
//             _id:0,
//             price: 1,
//           },
//         },
//         { $sort: { createdAt: -1 } },
//   ],        function (err, body) {
//     if (err) {
//         cb(err,null)
//     } else {
      
//       let abc=[];
//       // console.log("body in callback",body);
//       for(let i=0;i<=body.length;i++){
        
        
//           let xyz = body[i]
//           abc.push(xyz)
        
//       //  console.log("array store or not",abc);
    
//        cb(null,abc)
//       }
//     }
// })
// };








//7 variants matching your search Criteria

exports.matchCriteria= async function(req,res,next){
  var kiloM=Number(req.params.km)
  console.log("km in",kiloM);
  var engineCC =Number(req.params.enginecc)
  var a=req.params.price
  var priceInNumber=Number(a) //Number

  //await Cars.aggregate([{"$match" : {"price":{$gte:priceInNumber},"factors_displacement_cc":req.params.enginecc,"mileage":req.params.km}},{$project:{

  await Cars.aggregate([{"$match" : {"price":{$gte:priceInNumber},"factors_displacement_cc":engineCC,"mileage":kiloM}},{$project:{
    _id:1,
    price:1,
    model:1,
    factors_body_type:1,
    brand:1,
    // car_img:1,
    // car_review:1,
    factors_fuel_type:1,
    engine:1,
    mileage:1,
    price_print:1,
    mileage_print:1,
    factors_displacement_cc:1,
    colours: 1,
    pictures:1,
  }},{ $sort: { price: 1 } },{$limit:7},])
  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })



  
}






//for test 
// exports.aggegateData= async function(req,res,next){
//   var query={"brand":req.params.brand}
//   await Cars.aggregate([{$group:{_id:"$price",count:{$sum:1}}}])
//   .then((d)=>{
//     res
//     .status(200)
//     .send({success:true,msg:'data found',error:null,data:d});
//   })
//   .catch((e)=>{
//     res.status(200).send({success:false,msg:null,error:e});
//   })
// }


//top serach controller


exports.updateCount = async function (req, res, next) {
  await Cars.findByIdAndUpdate(
    req.params.id,
    {
      // $set: {
      // car_count:req.body.car_count,
      //here we increase count of car id object , it only work on object that have car_count attribute
      $inc: { car_count: 1 }
      // },
    },
    { new: true }
  )
    .then((data) => {
      console.log(data);
      res
        .status(200)
        .send({ success: true, msg: "data is updates", data: data, err: null });
    })
    .catch((e) =>
      res
        .status(200)
        .send({
          success: false,
          msg: "something went wrong",
          data: null,
          err: e,
        })
    );
};



exports.topSearch= async function(req,res,next){
  await Cars.find({rowstatus:1}).sort({"car_count":-1}).select({
        _id: 1,
        rowstatus: 1,
        car_count:1,
        car_id: 1,
        // car_review:1,
        rows: 1,
        // car_img:1,
        brand:1,
        varient:1,
        mileage:1,
        engine:1,
        fuel_type:1,
        model: 1,
        seating_capacity:1,
        transmission:1,
        price: 1,
        price_print:1,
        mileage_print:1,
        colours: 1,
        factors_body_type:1,
        pictures:1,
        createdAt: 1,
  })
  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
    .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: 'data found', error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    })
}


//full text search query

exports.fullText = async function (req, res, next) {
  await Cars.aggregate([{ $match: { $text: { $search: "Hyundai" } } }])
    .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: 'data found', error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    })
}






//find mileage start and end value
exports.mileagesort= async function(req,res,next){
  smileageNo=Number(req.params.smileage)
  emileageNo=Number(req.params.emileage)
  
  var query1={mileage:{$gte:smileageNo || 5 , $lte:emileageNo || 50}} 

  // await Cars.find({"$and":[query1]}).select({
  //   _id: 1,
  //   rowstatus: 1,
  //   car_id: 1,
  //   // car_review:1,
  //   rows: 1,
  //   fuel_type:1,
  //   // car_img:1,
  //   brand:1,
  //   varient:1,
  //   mileage:1,
  //   engine:1,
  //   model: 1,
  //   seating_capacity:1,
  //   transmission:1,
  //   price: 1,
  //   price_print:1,
  //   mileage_print:1,
  //   colours: 1,
  //   factors_body_type:1,
  //   pictures:1,
  //   factors_displacement_cc:1,
  //   createdAt: 1,
  // })

  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1]} },
    {
      $project: {
        _id: 1,
        rowstatus: 1,
        car_id: 1,
        // car_review:1,
        rows: 1,
        fuel_type:1,
        // car_img:1,
        brand:1,
        varient:1,
        mileage:1,
        engine:1,
        model: 1,
        seating_capacity:1,
        transmission:1,
        price: 1,
        price_print:1,
        mileage_print:1,
        colours: 1,
        factors_body_type:1,
        pictures:1,
        factors_displacement_cc:1,
        createdAt: 1,
      },
    },
    // { $sort: { createdAt: -1 } },
  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}








//find displacement sort start and end value
exports.displacementsort= async function(req,res,next){
  sccNo=Number(req.params.scc)
  eccNo=Number(req.params.ecc)
 
  var query1={factors_displacement_cc:{$gte:sccNo || 700 , $lte:eccNo || 5000}} 
 
  // await Cars.find({"$and":[query1]}).select({
  //   _id: 1,
  //   rowstatus: 1,
  //   car_id: 1,
  //   // car_review:1,
  //   rows: 1,
  //   fuel_type:1,
  //   // car_img:1,
  //   brand:1,
  //   varient:1,
  //   mileage:1,
  //   engine:1,
  //   model: 1,
  //   seating_capacity:1,
  //   transmission:1,
  //   price: 1,
  //   price_print:1,
  //   mileage_print:1,
  //   colours: 1,
  //   factors_body_type:1,
  //   pictures:1,
  //   factors_displacement_cc:1,
  //   createdAt: 1,
  // })

  
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1]} },
    {
      $project: {
        _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    fuel_type:1,
    // car_img:1,
    brand:1,
    varient:1,
    mileage:1,
    engine:1,
    model: 1,
    seating_capacity:1,
    transmission:1,
    price: 1,
    price_print:1,
    mileage_print:1,
    colours: 1,
    factors_body_type:1,
    pictures:1,
    factors_displacement_cc:1,
    createdAt: 1
      },
    },
    // { $sort: { createdAt: -1 } },
  ])


  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}



//getbranddetails
exports.getbranddetailsData= async function(req,res,next){
  var a=req.body

  // var rowstatus={rowstatus: 1}
  // var priceA={"price":{$gte:req.body.sSvalue}}
  // var fdccA={"factors_displacement_cc":{$gte:req.body.fdcc_start  }}
  // var mileageA={"mileage": {$gte:req.body.mileage_start }}
  var brandA={"brand":req.body.brand}

  console.log("here we get request",req.body);
  //here we change match critriteria for price , factor_d_cc ,and mileage 
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},brandA]} },
    {$group:{_id:"$model","model": { $first: "$model"},"price_print":{$first:"$price_print"},"brand":{$first:"$brand"}}},
    {
      $project: {
        _id: 1,
        rowstatus: 1,
        car_id: 1,
        // car_review:1,
        rows: 1,
        brand:1,
        // car_img:1,
        price: 1,
        price_print:1,
        mileage_print:1,
        factors_body_type:1,
        fuel_type:1,
        mileage:1,
        seating_capacity:1,
        transmission:1,
        factors_Displacement_CC:1,
        safety_features_airbag:1,
        factors_emission_standard:1,
        factors_displacement_cc:1,
        colours: 1,
        pictures:1,
        varient:1,
        engine:1,
        model: 1,
        colours: 1,
        factors_body_type:1,
        capacities_seating_capacity:1,
        createdAt: 1,
      },
    },
    // {$limit:7},
    { $sort: { model: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}




exports.getallvarients= async function(req,res,next){
  var a=req.body

  // var priceA={"price":{$gte:req.body.sSvalue || 1 , $lte:req.body.price_sEvalue || 1000}}
  // var fdccA={"factors_displacement_cc":{$gte:req.body.fdcc_start || 1 , $lte:req.body.fdcc_end || 10000}}
  // var mileageA={"mileage": {$gte:req.body.mileage_start || 1 , $lte:req.body.mileage_end || 100}}

  // var rowstatus={rowstatus: 1}
  // var priceA={"price":{$gte:req.body.sSvalue}}
  // var fdccA={"factors_displacement_cc":{$gte:req.body.fdcc_start  }}
  // var mileageA={"mileage": {$gte:req.body.mileage_start }}

  var modelA={"model":req.body.model}

  console.log("here we get request",req.body);

  // await Cars.find({"$and":[{brand:req.params.sbrand},{price:{$gte:req.params.sSvalue,$lte:req.params.sEvalue}},{factors_body_type:req.params.vtype}]}).select({
  // await Cars.find({"$and":[{rowstatus:1},priceA,mileageA,fdccA]}).select({
  //   _id: 1,
  //   rowstatus: 1,
  //   car_id: 1,
  //   // car_review:1,
  //   rows: 1,
  //   brand:1,
  //   // car_img:1,
  //   price: 1,
  //   price_print:1,
  //   mileage_print:1,
  //   factors_body_type:1,
  //   fuel_type:1,
  //   mileage:1,
  //   seating_capacity:1,
  //   transmission:1,
  //   factors_Displacement_CC:1,
  //   safety_features_airbag:1,
  //   factors_emission_standard:1,
  //   factors_displacement_cc:1,
  //   colours: 1,
  //   pictures:1,
  //   varient:1,
  //   engine:1,
  //   model: 1,
  //   colours: 1,
  //   factors_body_type:1,
  //   capacities_seating_capacity:1,
  //   createdAt: 1,
  // })

  //here we change match critriteria for price , factor_d_cc ,and mileage 
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},modelA]} },
    {
      $project: {
        _id: 1,
        rowstatus: 1,
        car_id: 1,
        // car_review:1,
        rows: 1,
        brand:1,
        // car_img:1,
        price: 1,
        price_print:1,
        mileage_print:1,
        factors_body_type:1,
        fuel_type:1,
        mileage:1,
        seating_capacity:1,
        transmission:1,
        factors_Displacement_CC:1,
        safety_features_airbag:1,
        factors_emission_standard:1,
        factors_displacement_cc:1,
        colours: 1,
        pictures:1,
        varient:1,
        engine:1,
        model: 1,
        colours: 1,
        factors_body_type:1,
        capacities_seating_capacity:1,
        createdAt: 1,
      },
    },
    {$limit:7},
    { $sort: { price: 1 } },
  ])



  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}




exports.getallvarientsData= async function(req,res,next){
  var a=req.body

  var modelA={"model":req.body.model}

  console.log("here we get request",req.body);

  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},modelA]} },
    {
      $project: {
        _id: 1,
        rowstatus: 1,
        car_id: 1,
        // car_review:1,
        rows: 1,
        brand:1,
        // car_img:1,
        price: 1,
        price_print:1,
        mileage_print:1,
        factors_body_type:1,
        fuel_type:1,
        mileage:1,
        seating_capacity:1,
        transmission:1,
        factors_Displacement_CC:1,
        safety_features_airbag:1,
        factors_emission_standard:1,
        factors_displacement_cc:1,
        colours: 1,
        pictures:1,
        varient:1,
        engine:1,
        model: 1,
        colours: 1,
        factors_body_type:1,
        capacities_seating_capacity:1,
        createdAt: 1,
      },
    },
    // {$limit:7},
    { $sort: { price: 1 } },
  ])



  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}






//page no 33

exports.getselectedcarData= async function(req,res,next){
  
  
  var brandA={"brand":req.body.brand}
  var mtypeA={"model":req.body.model }
  var vtypeA={"varient":req.body.varient }

  console.log("here we get request",req.body.brand ,req.body.model , req.body.varient );

  // await Cars.find({"$and":[{brand:req.params.sbrand},{price:{$gte:req.params.sSvalue,$lte:req.params.sEvalue}},{factors_body_type:req.params.vtype}]}).select({
  await Cars.find({"$and":[{rowstatus: 1},brandA,mtypeA,vtypeA]}).select({
    _id: 1,
    rowstatus: 1,
    car_id: 1,
    // car_review:1,
    rows: 1,
    brand:1,
    // car_img:1,
    price: 1,
    price_print:1,
    mileage_print:1,
    factors_body_type:1,
    fuel_type:1,
    mileage:1,
    seating_capacity:1,
    transmission:1,
    factors_Displacement_CC:1,
    safety_features_airbag:1,
    factors_emission_standard:1,
    factors_displacement_cc:1,
    colours: 1,
    pictures:1,
    varient:1,
    engine:1,
    model: 1,
    colours: 1,
    factors_body_type:1,
    capacities_seating_capacity:1,
    createdAt: 1,
  })

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}


//here we create filterAllDataTwo 
exports.filterallDataTwo = async function (req, res, next) {

  
  var brandA={"brand":req.body.brand || ['Hyundai','Datsun','RollsRoyce','Lamborghini','Porsche','Nissan','MercedesBenz','Mahindra','Audi','Kia','Skoda','Volkswagen','Ferrari','Maserati','Bentley','AstonMartin','Isuzu','Volvo','Honda','Maruti','Tata','Ford','Renault','BMW','MG','Jeep','Jaguar','MINI','Lexus']}
  var vtypeA={"factors_body_type":req.body.factors_body_type || ["MUV","SUV","Roadster","Crossover","Estate","Coupe","Hatchback","Sedan","","N/A","NA","-"]}
  var scapacityA={"capacities_seating_capacity":req.body.capacities_seating_capacity || ["2","3","4","5","6","7","8","9","10","11","12","13","14","15","","N/A","NA","-"]}
  var transmissionA={"transmission":req.body.transmission || ["Manual","Automatic","","N/A","NA","-"]}
  var safetyA={"safety_features_airbag":req.body.safety_features_airbag || ["Yes","No","","N/A","NA","-"]}
  var emissionA={"factors_emission_standard":req.body.factors_emission_standard || ["BS4","BS6","BS7","","N/A","NA","-"]}
  var fuelA={"fuel_type":req.body.fuel_type || ["Petrol","Diesel","CNG","Electric","","N/A","NA","-"]}
  var priceA={"price":{$gte:req.body.price_sSvalue || 1 , $lte:req.body.price_sEvalue || 1000}}
  var mileageA={"mileage": {$gte:req.body.mileage_start || 1 , $lte:req.body.mileage_end || 100}}
  var fdccA={"factors_displacement_cc":{$gte:req.body.fdcc_start || 1 , $lte:req.body.fdcc_end || 10000}}

  console.log("req",priceA);

  var emptyBrand={}
  var emptyFBT={}
  var emptyCSC={}
  var emptyT={}
  var emptySFA={}
  var emptyFES={}
  var emptyFT={}
  var emptyP={}
  var emptyM={}
  var emptyFDC={}

  console.log("req ",req.body.brand);
  if(req.body.brand != undefined) {
    emptyBrand.brand = req.body.brand
  }else{
    emptyBrand = {};
  }

  if(req.body.factors_body_type != undefined) {
    emptyFBT.factors_body_type = req.body.factors_body_type
  }else{
    emptyFBT = {};
  }

  if(req.body.capacities_seating_capacity != undefined) {
    emptyCSC.capacities_seating_capacity = req.body.capacities_seating_capacity
  }else{
    emptyCSC = {};
  }

  if(req.body.transmission != undefined) {
    emptyT.transmission = req.body.transmission
  }else{
    emptyT = {};
  }

  if(req.body.safety_features_airbag != undefined) {
    emptySFA.safety_features_airbag = req.body.safety_features_airbag
  }else{
    emptySFA = {};
  }

  if(req.body.factors_emission_standard != undefined) {
    emptyFES.factors_emission_standard = req.body.factors_emission_standard
  }else{
    emptyFES = {};
  }

  if(req.body.fuel_type != undefined) {
    emptyFT.fuel_type = req.body.fuel_type
  }else{
    emptyFT = {};
  }

  if(req.body.price_sSvalue != undefined && req.body.price_sEvalue != undefined) {
    emptyP.price = {"$gte":req.body.price_sSvalue , "$lte":req.body.price_sEvalue }
  }else{
    emptyP = {};
  }

  if(req.body.mileage_start != undefined && req.body.mileage_end != undefined) {
    emptyM.mileage = {"$gte":req.body.mileage_start , "$lte":req.body.mileage_end }
  }else{
    emptyM = {};
  }

  if(req.body.fdcc_start != undefined && req.body.fdcc_end != undefined) {
    emptyFDC.factors_displacement_cc = {"$gte":req.body.fdcc_start , "$lte":req.body.fdcc_end }
  }else{
    emptyFDC = {};
  }



  //,vtypeA,scapacityA,brandA,transmissionA,safetyA,emissionA,fuelA,priceA,mileageA,fdccA
  // rowstatus: 1
  await Cars.aggregate([
    { $match: {$and:[emptyBrand,emptyFBT,emptyCSC,emptyT,emptySFA,emptyFES,emptyFT,emptyP,emptyM,emptyFDC]}},
    {
      $project: {
        _id: 1,
        rowstatus: 1,
        // car_img:1,
        // car_review:1,
        car_id: 1,
        rows: 1,
        model: 1,
        varient: 1,
        brand:1,
        colours: 1,
        pictures:1,
        factors_displacement_cc:1,
        createdAt: 1,
        factors_body_type:1,
        price: 1,
        mileage:1,
        price_print:1,
        mileage_print:1,
        fuel_type:1

      },
    },
    // { $sort: { createdAt: -1 } },
    { $sort: { model: 1 } },
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



//brand and price 22-06-2022

exports.brandandprice= async function(req,res,next){
  
  
  var brandA={"brand":req.body.brand}
  //here we get only start value
  var pvalueA={"price":{$gte:req.body.price_sSvalue}}
  await Cars.aggregate([
    { $match: {$and:[{rowstatus: 1},brandA,pvalueA]}},
    {
      $project: {
          _id: 1,
          car_id: 1,
          rowstatus: 1,
          rows: 1,
          // car_review:1,
          // car_img:1,
          brand:1,
          price_print:1,
          price: 1,
          factors_body_type:1,
          mileage_print:1,
          mileage:1,
          fuel_type:1,
          transmission:1,
          seating_capacity:1,
          safety_features_airbag:1,
          factors_Displacement_CC:1,
          factors_displacement_cc:1,
          factors_emission_standard:1,
          pictures:1,
          colours: 1,
          engine:1,
          varient:1,
          colours: 1,
          model: 1,
          capacities_seating_capacity:1,
          factors_body_type:1,
          createdAt: 1,
      },
    },
    // { $sort: { createdAt: -1 } },
    { $sort: { price: 1 }  },
    { $limit: 30 },
  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}


exports.allCarCategoriesData= async function(req,res,next){
  var a=req.body

  var brandA={"factors_body_type":req.body.factors_body_type}

  console.log("here we get request",req.body);
  //here we change match critriteria for price , factor_d_cc ,and mileage 
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},brandA]} },
    {$group:{_id:"$model","car_id":{$first:"$car_id"},"model": { $first: "$model"},"price_print":{$first:"$price_print"},"brand":{$first:"$brand"},"varient":{$first:"$varient"},"price":{$first:"$price"},"mileage_print":{$first:"$mileage_print"},
    // "id":{$first:"_id"},
    "mileage":{$first:"$mileage"},"engine":{$first:"$engine"},"transmission":{$first:"$transmission"},"seating_capacity":{$first:"$seating_capacity"},"colors":{$first:"$colors"},"pictures":{$first:"$pictures"},"factors_body_type":{$first:"$factors_body_type"},
    "factors_fuel_type":{$first:"$factors_fuel_type"},"factors_segment":{$first:"$factors_segment"},"factors_transmission":{$first:"$factors_transmission"},"factors_engine":{$first:"$factors_engine"},"factors_no_of_gears":{$first:"$factors_no_of_gears"},"factors_displacement_cc":{$first:"$factors_displacement_cc"},
    "factors_emission_standard":{$first:"$factors_emission_standard"},"performance_peak_power_bhp_max_rpm":{$first:"$performance_peak_power_bhp_max_rpm"},"performance_peak_torque_nm_max_rpm":{$first:"$performance_peak_torque_nm_max_rpm"},"performance_mileage_city_highway_in_kmpl":{$first:"$performance_mileage_city_highway_in_kmpl"},
    "dimensions_length_mm":{$first:"$dimensions_length_mm"},"dimensions_height_mm":{$first:"$dimensions_height_mm"},"dimensions_width_mm":{$first:"$dimensions_width_mm"},"dimensions_weelbase_mm":{$first:"$dimensions_weelbase_mm"},"dimensions_boot_space_l":{$first:"$dimensions_boot_space_l"},"dimensions_ground_clearance_mm":{$first:"$dimensions_ground_clearance_mm"},
    "dimensions_kerb_weight_kgs":{$first:"$dimensions_kerb_weight_kgs"},"dimensions_turning_radius_m":{$first:"$dimensions_turning_radius_m"},"key_features_air":{$first:"$key_features_air"},"key_features_central_locking":{$first:"$key_features_central_locking"},"key_features_power_steering":{$first:"$key_features_power_steering"},"key_features_steering_adjustment_rake_reach":{$first:"$key_features_steering_adjustment_rake_reach"},
    "key_features_steering_mounted_controls":{$first:"$key_features_steering_mounted_controls"},"key_features_remote_controlled_boot":{$first:"$key_features_remote_controlled_boot"},"key_features_leather_seats":{$first:"$key_features_leather_seats"},"key_features_cruise_control":{$first:"$key_features_cruise_control"},"key_features_climate_control":{$first:"$key_features_climate_control"},
    "key_features_cd_player":{$first:"$key_features_cd_player"},"key_features_power_windows":{$first:"$key_features_power_windows"},"key_features_electrically_adjustable_driver_seat":{$first:"$key_features_electrically_adjustable_driver_seat"},"key_features_rear_ac_vent":{$first:"$key_features_rear_ac_vent"},"key_features_rear_wiper":{$first:"$key_features_rear_wiper"},
    "key_features_electrically_adjustable_mirrors":{$first:"$key_features_electrically_adjustable_mirrors"},"safety_features_anti_lock_braking_system_abs":{$first:"$safety_features_anti_lock_braking_system_abs"},"safety_features_parking_sensors":{$first:"$safety_features_parking_sensors"},"safety_features_airbag":{$first:"$safety_features_airbag"},"safety_features_traction_control":{$first:"$safety_features_traction_control"},"capacities_fuel_capacity_l":{$first:"$capacities_fuel_capacity_l"},
    "capacities_seating_capacity":{$first:"$capacities_seating_capacity"},"wheels_and_tyres_Tyre_specs_front":{$first:"$wheels_and_tyres_Tyre_specs_front"},"wheels_and_tyres_Tyre_specs_rear":{$first:"$wheels_and_tyres_Tyre_specs_rear"},"tags":{$first:"$tags"},"createdAt":{$first:"$createdAt"},"updatedAt":{$first:"$updatedAt"}}},
    {
      $project: {
        _id:1,
        rowstatus:1,
        car_count:1,
        car_id:1,
        brand:1,
        model:1,
        varient:1,
        price_print:1,
        price:1,
        mileage_print:1,
        mileage:1,
        engine:1,
        transmission:1,
        fuel_type:1,
        seating_capacity:1,
        colors:1,
        pictures:1,
        factors_body_type:1,
        factors_fuel_type:1,
        factors_segment:1,
        factors_transmission:1,
        factors_engine:1,
        factors_no_of_gears:1,
        factors_displacement_cc:1,
        factors_emission_standard:1,
        performance_peak_power_bhp_max_rpm:1,
        performance_peak_torque_nm_max_rpm:1,
        performance_mileage_city_highway_in_kmpl:1,
        dimensions_length_mm:1,
        dimensions_height_mm:1,
        dimensions_width_mm:1,
        dimensions_weelbase_mm:1,
        dimensions_boot_space_l:1,
        dimensions_ground_clearance_mm:1,
        dimensions_kerb_weight_kgs:1,
        dimensions_turning_radius_m:1,
        key_features_air:1,
        key_features_central_locking:1,
        key_features_power_steering:1,
        key_features_steering_adjustment_rake_reach:1,
        key_features_steering_mounted_controls:1,
        key_features_remote_controlled_boot:1,
        key_features_leather_seats:1,
        key_features_cruise_control:1,
        key_features_climate_control:1,
        key_features_cd_player:1,
        key_features_power_windows:1,
        key_features_electrically_adjustable_driver_seat:1,
        key_features_rear_ac_vent:1,
        key_features_rear_wiper:1,
        key_features_electrically_adjustable_mirrors:1,
        safety_features_anti_lock_braking_system_abs:1,
        safety_features_parking_sensors:1,
        safety_features_airbag:1,
        safety_features_traction_control:1,
        capacities_fuel_capacity_l:1,
        capacities_seating_capacity:1,
        wheels_and_tyres_Tyre_specs_front:1,
        wheels_and_tyres_Tyre_specs_rear:1,
        tags:1,
        createdAt:1,
        updatedAt:1,
        __v:1
      },
    },
    // {$limit:7},
    { $sort: { model: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}



exports.getcarIdData = async function (req, res, next) {
  var carIdA={"car_id":req.body.car_id}
  await Cars.aggregate([
    { $match: {"$and":[{rowstatus: 1},carIdA]}},
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



//new api for compaire api for bodytype and price file 27-06-2022

exports.compareBtypePrice = async function (req, res, next) {
  var a=req.params.price
  var b=req.params.btype
  var priceInNumber=Number(a)
  query1={ "price" : {$gte:priceInNumber}}
  query2={"factors_body_type":b}
  console.log("here is query 1",query1);
  console.log("ge data by user",b,a);
  

  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1,query2]} },
    { $sort: { price: 1 } },
  ])


  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}



//get all brand that present in database
exports.allBrandData= async function(req,res,next){
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1}]} },
    {$group:{_id:"$brand","car_id":{$first:"$car_id"}}},
    {
      $project: {
        _id:1,
        car_id:1,
        brand:1,
        createdAt:1,
        updatedAt:1,
        __v:1
      },
    },
    // {$limit:7},
    { $sort: { _id: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}



//get one object using varient and pricce print
exports.getCarObjectData= async function(req,res,next){
  query1={price_print:req.body.price_print}
  query2={varient:req.body.varient}
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1,query2]} },
  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}





//get all cars by price data 
exports.allCarsByPrice= async function(req,res,next){
  query1={price:{$gte:req.body.b_start, $lte:req.body.b_end }}
  // var priceA={"price":{$gte:req.body.price_sSvalue || 1 , $lte:req.body.price_sEvalue || 1000}}
  console.log("allCarsByPrice query1",query1);
  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1]} },
    {$group:{_id:"$brand","car_id":{$first:"$car_id"},"price_print":{$first:"$price_print"},"model":{$first:"$model"},"brand":{$first:"$brand"}}},
    {
      $project: {
        _id:1,
        car_id:1,
        brand:1,
        price_print:1,
        model:1,
        brand:1,
        createdAt:1,
        updatedAt:1,
        __v:1
      },
    },
    // {$limit:7},
    { $sort: { _id: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}







exports.allBrandCount= async function(req,res,next){
 
  

  let startdate=new Date(req.body.carsStartDate)
  startdate.setDate(startdate.getDate() + parseInt(1))
  console.log("get next date",startdate);

  
  let enddate=new Date(req.body.carsEndDate)
  enddate.setDate(enddate.getDate() + parseInt(1))
  console.log("get next date",enddate);

  query1={
    createdAt:
    {$gte:startdate,
     $lte:enddate}
  }
  console.log("get cars data quary",query1);

  await Cars.aggregate([
    {
      $match:{"$and":[{rowstatus:1},query1]} 
    },
    {
      
      $group: {
         _id: "$brand",
         count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}


//get model of brands
exports.brandModel= async function(req,res,next){

  let startdate=new Date(req.body.carsStartDate)
  startdate.setDate(startdate.getDate() + parseInt(1))
  console.log("get next date",startdate);

  
  let enddate=new Date(req.body.carsEndDate)
  enddate.setDate(enddate.getDate() + parseInt(1))
  console.log("get next date",enddate);


  query1={
    createdAt:
    {$gte:startdate,
     $lte:enddate}
  }

  query2={brand:req.body.cbrand}
  


  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1,query2]} },
    {$group:{_id:"$model", count: { $sum: 1 }}},
    { $sort: { _id: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}

//get varient of brands
exports.brandVarient= async function(req,res,next){

  let startdate=new Date(req.body.carsStartDate)
  startdate.setDate(startdate.getDate() + parseInt(1))
  console.log("get next date",startdate);

  
  let enddate=new Date(req.body.carsEndDate)
  enddate.setDate(enddate.getDate() + parseInt(1))
  console.log("get next date",enddate);


  query1={
    createdAt:
    {$gte:startdate,
     $lte:enddate}
  }

  query2={brand:req.body.cbrand}


  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1,query2]} },
    {$group:{_id:"$varient", count: { $sum: 1 }}},
    { $sort: { _id: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}





//get specific car brand model
exports.getBrandModel= async function(req,res,next){

  let startdate=new Date(req.body.carsStartDate)
  startdate.setDate(startdate.getDate() + parseInt(1))
  console.log("get next date",startdate);

  
  let enddate=new Date(req.body.carsEndDate)
  enddate.setDate(enddate.getDate() + parseInt(1))
  console.log("get next date",enddate);


  query1={
    createdAt:
    {$gte:startdate,
     $lte:enddate}
  }

  query2={brand:req.body.cbrand}
  // query3={model:req.body.cmodel}
  // query4={varient:req.body.cvarient}

  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1,query2]} },
    {$group:{_id:"$model", count: { $sum: 1 }}},
    { $sort: { _id: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}




//get specific car model varient
exports.getBrandModelVarient= async function(req,res,next){

  let startdate=new Date(req.body.carsStartDate)
  startdate.setDate(startdate.getDate() + parseInt(1))
  console.log("get next date",startdate);

  
  let enddate=new Date(req.body.carsEndDate)
  enddate.setDate(enddate.getDate() + parseInt(1))
  console.log("get next date",enddate);


  query1={
    createdAt:
    {$gte:startdate,
     $lte:enddate}
  }

  query2={brand:req.body.cbrand}
  query3={model:req.body.cmodel}
  // query4={varient:req.body.cvarient}

  await Cars.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1,query2,query3]} },
    {$group:{_id:"$varient", count: { $sum: 1 }}},
    { $sort: { _id: 1 } },

  ])

  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'data found',error:null,data:d});
    // console.log("data",d);
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}


