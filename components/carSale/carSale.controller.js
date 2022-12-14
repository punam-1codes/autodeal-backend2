const carSell = require("./carSale.model");
const { nanoid } = require("nanoid");


exports.uploadCarImg= async function (req, res) {
  console.log("req for body res",res.req.file);

  res
  .status(200)
  .send({ success: true, msg: "new sell car uploaded", error: null, data: res.req.file });
}

exports.addSellCar= async function (req, res, next) {
    let genrateId = nanoid(6);

    let nsellcar = new carSell({
        sell_car_id: genrateId,
        brand:req.body.brand,
        model:req.body.model,
        fueltype:req.body.fueltype,
        month:req.body.month,
        year:req.body.year,
        owner:req.body.owner,
        color:req.body.color,
        kd_Done:req.body.kd_Done,
        city:req.body.city,
        registration_no:req.body.registration_no,
        registration_at:req.body.registration_at,
        life_time_tax:req.body.life_time_tax,
        car_insurance:req.body.car_insurance,
        insurance_valid_till:req.body.insurance_valid_till,
        estimated_price:req.body.estimated_price,
        is_car_accidental:req.body.is_car_accidental,
        is_car_flood_affected:req.body.is_car_flood_affected,
        sellcar_img:req.body.sellcar_img,
        sellcaruser:req.body.sellcaruser,
        sellcarusernumber:req.body.sellcarusernumber,
    })
    await nsellcar
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new sell car is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}









exports.getSellCars=async function (req,res,next){
    //it is model name
    await carSell.find({}).select({})
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "sell cars data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}


exports.getSellCarById = async function (req, res, next) {
    await carSell.findById(req.params.id)
      .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "sell cars data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
  
  
  };


  exports.removeSellCar = async function (req, res, next) {
    await carSell.findByIdAndUpdate(
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
        res.status(200).send({ success: true, msg: "sell car soft removed", err: null });
      })
      .catch((e) =>
        res
          .status(200)
          .send({ success: false, msg: "something went wrong", err: e })
      );
  };



  exports.updateSellCar = async function (req, res, next) {
    await carSell.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
            rowstatus:req.body.rowstatus,
            brand:req.body.brand,
            model:req.body.model,
            fueltype:req.body.fueltype,
            month:req.body.month,
            year:req.body.year,
            owner:req.body.owner,
            color:req.body.color,
            kd_Done:req.body.kd_Done,
            city:req.body.city,
            registration_no:req.body.registration_no,
            registration_at:req.body.registration_at,
            life_time_tax:req.body.life_time_tax,
            car_insurance:req.body.car_insurance,
            insurance_valid_till:req.body.insurance_valid_till,
            estimated_price:req.body.estimated_price,
            is_car_accidental:req.body.is_car_accidental,
            is_car_flood_affected:req.body.is_car_flood_affected,
            sellcar_img:req.body.sellcar_img,
            sellcaruser:req.body.sellcaruser,
            sellcarusernumber:req.body.sellcarusernumber,
        },
      },
      { new: true }
    )
      .then((data) => {
        console.log(data);
        res
          .status(200)
          .send({ success: true, msg: "sell car data is updates", data: data, err: null });
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



exports.availableSellCar=async function (req,res,next){
    //it is model name
    await carSell.find({rowstatus:1})
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "sell cars data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}



exports.latestSellCars=async function (req,res,next){
  //it is model name
  await carSell.find({rowstatus:1}).sort({createdAt:-1})
  .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: "sell cars data found", error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    });
}


exports.budgetSellCars = async function (req, res, next) {
  console.log("req body",req.params.scprice);
  var a=req.params.scprice
  var priceInNumber=Number(a)
  console.log("price in number",priceInNumber);
  query1={ "estimated_price" : {$gte:priceInNumber}}
  console.log("ge data by user",typeof(b));

  await carSell.aggregate([
    { $match:{"$and":[{rowstatus: 1},query1]} },
    { $sort: { estimated_price: 1 } },
  ])


  .then((d)=>{
    res
    .status(200)
    .send({success:true,msg:'sell car budget cars data found',error:null,data:d});
  })
  .catch((e)=>{
    res.status(200).send({success:false,msg:null,error:e});
  })
}




exports.mostViewSellCars = async function (req, res, next) {
  await carSell.findByIdAndUpdate(
    req.params.id,
    {
      $inc: { sellcar_view: 1 }
    },
    { new: true }
  )
    .then((data) => {
      console.log(data);
      res
        .status(200)
        .send({ success: true, msg: "sell car data is updates", data: data, err: null });
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


exports.getMostViewSellCars=async function (req,res,next){
  //it is model name
  await carSell.find({rowstatus:1}).sort({sellcar_view:-1})
  .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: "top views cars data found", error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    });
}


//get brand model

//getbranddetails
exports.getBrandModel= async function(req,res,next){
  await carSell.aggregate([
    { $match:{rowstatus:1} },
    {$group:{_id:"$brand",model:{$push:"$model"}}},
   
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


exports.filterAllData= async function(req,res,next){
  console.log("console filterAll Data",req.body);  
  var brandA={"brand":req.body.brand || ['Hyundai','Datsun','RollsRoyce','Lamborghini','Porsche','Nissan','MercedesBenz','Mahindra','Audi','Kia','Skoda','Volkswagen','Ferrari','Maserati','Bentley','AstonMartin','Isuzu','Volvo','Honda','Maruti','Tata','Ford','Renault','BMW','MG','Jeep','Jaguar','MINI','Lexus']}
  var modelA={"model":req.body.model}
  var fuelA={"fueltype":req.body.fueltype || ["Petrol","Diesel","CNG","Electric","","N/A","NA","-"]}
  var yearA={"year": {$gte:req.body.year_start || 1990 , $lte:req.body.year_end || 2050}}
  var kdA={"kd_Done":{$gte:req.body.kd_start || 1 , $lte:req.body.kd_end || 100000000}}
  var priceA={"estimated_price":{$gte:req.body.eprice_sSvalue || 1 , $lte:req.body.eprice_sEvalue || 100000000}}


  // await Cars.find({"$and":[{brand:req.params.sbrand},{price:{$gte:req.params.sSvalue,$lte:req.params.sEvalue}},{factors_body_type:req.params.vtype}]}).select({
  await carSell.find({"$and":[{rowstatus: 1},brandA,modelA,fuelA,yearA,kdA,priceA]})
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



//here we create filterAllDataTwo 
exports.filterAllDataTwoApi = async function (req, res, next) {

  
  var brandA={"brand":req.body.brand || ['Hyundai','Datsun','RollsRoyce','Lamborghini','Porsche','Nissan','MercedesBenz','Mahindra','Audi','Kia','Skoda','Volkswagen','Ferrari','Maserati','Bentley','AstonMartin','Isuzu','Volvo','Honda','Maruti','Tata','Ford','Renault','BMW','MG','Jeep','Jaguar','MINI','Lexus']}
  var modelA={"model":req.body.model}
  var fuelA={"fueltype":req.body.fueltype || ["Petrol","Diesel","CNG","Electric","","N/A","NA","-"]}
  var yearA={"year": {$gte:req.body.year_start || 1990 , $lte:req.body.year_end || 2050}}
  var kdA={"kd_Done":{$gte:req.body.kd_start || 1 , $lte:req.body.kd_end || 100000000}}
  var priceA={"estimated_price":{$gte:req.body.eprice_sSvalue || 1 , $lte:req.body.eprice_sEvalue || 100000000}}

  console.log("req",priceA);

  var emptyBrand={}
  var emptyM={}
  var emptyFT={}
  var emptyY={}
  var emptyKD={}
  var emptyPV={}
  

  console.log("req ",req.body.brand);

  if(req.body.brand != undefined) {
    emptyBrand.brand = req.body.brand
  }else{
    emptyBrand = {};
  }

  if(req.body.model != undefined) {
    emptyM.model = req.body.model
  }else{
    emptyM = {};
  }

  if(req.body.fueltype != undefined) {
    emptyFT.fueltype = req.body.fueltype
  }else{
    emptyFT = {};
  }

  if(req.body.year_start != undefined && req.body.year_end != undefined) {
    emptyY.year = {"$gte":req.body.year_start , "$lte":req.body.year_end }
  }else{
    emptyY = {};
  }

  if(req.body.kd_start != undefined && req.body.kd_end != undefined) {
    emptyKD.kd_Done = {"$gte":req.body.kd_start , "$lte":req.body.kd_end }
  }else{
    emptyKD = {};
  }

  if(req.body.eprice_sSvalue != undefined && req.body.eprice_sEvalue != undefined) {
    emptyPV.estimated_price = {"$gte":req.body.eprice_sSvalue , "$lte":req.body.eprice_sEvalue }
  }else{
    emptyPV = {};
  }

 



  //,vtypeA,scapacityA,brandA,transmissionA,safetyA,emissionA,fuelA,priceA,mileageA,fdccA
  // rowstatus: 1
  await carSell.aggregate([
    { $match: {$and:[{rowstatus:1},emptyBrand,emptyM,emptyFT,emptyY,emptyKD,emptyPV]}},
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









