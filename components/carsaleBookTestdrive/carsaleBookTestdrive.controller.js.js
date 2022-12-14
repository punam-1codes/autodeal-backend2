const carSellBTD = require("./carsaleBookTestdrive.model");
const { nanoid } = require("nanoid");




exports.addSellCarBtd= async function (req, res, next) {
    let genrateId = nanoid(6);

    let nsellcar = new carSellBTD({
        scbtd_id: genrateId,
        scbtd_location:req.body.scbtd_location,
        scbtd_address:req.body.scbtd_address,
        scbtd_date:req.body.scbtd_date,
        scbtd_time:req.body.scbtd_time,
        scbtd_username:req.body.scbtd_username,
        scbtd_mobile:req.body.scbtd_mobile,
        scbtd_car_id:req.body.scbtd_car_id,
    })
    await nsellcar
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new sell car btd is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}









exports.getSellCarsBtd=async function (req,res,next){
    //it is model name
    await carSellBTD.find({}).select({})
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "sell cars btd data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}


exports.getSellCarBtdById = async function (req, res, next) {
    await carSellBTD.findById(req.params.id)
      .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "sell cars btd data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
  
  
  };


  exports.removeSellCarBtd = async function (req, res, next) {
    await carSellBTD.findByIdAndUpdate(
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
        res.status(200).send({ success: true, msg: "sell car btd soft removed", err: null });
      })
      .catch((e) =>
        res
          .status(200)
          .send({ success: false, msg: "something went wrong", err: e })
      );
  };



  exports.updateSellCarBtd = async function (req, res, next) {
    await carSellBTD.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
            rowstatus:req.body.rowstatus,
            scbtd_location:req.body.scbtd_location,
            scbtd_address:req.body.scbtd_address,
            scbtd_date:req.body.scbtd_date,
            scbtd_time:req.body.scbtd_time,
            scbtd_username:req.body.scbtd_username,
            scbtd_mobile:req.body.scbtd_mobile,
            scbtd_car_id:req.body.scbtd_car_id,
        },
      },
      { new: true }
    )
      .then((data) => {
        console.log(data);
        res
          .status(200)
          .send({ success: true, msg: "sell car btd data is updates", data: data, err: null });
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



exports.availableSellCarBtd=async function (req,res,next){
    //it is model name
    await carSellBTD.find({rowstatus:1})
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "sell cars btd data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}



exports.latestSellCarsBtd=async function (req,res,next){
  //it is model name
  await carSellBTD.find({rowstatus:1}).sort({createdAt:-1})
  .then((d) => {
      res
        .status(200)
        .send({ success: true, msg: "sell cars btd data found", error: null, data: d });
    })
    .catch((e) => {
      res.status(200).send({ success: false, msg: null, error: e });
    });
}

