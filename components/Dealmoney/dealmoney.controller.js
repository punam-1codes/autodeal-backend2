const dteamSchema = require("./dealmoney.model");
const { nanoid } = require("nanoid");


exports.adddealmoneyteam = async function (req, res, next) {
    let genrateId = nanoid(6);

    let noteam = new dteamSchema({
        name:req.body.name,
        email:req.body.email,
        wsno:req.body.wsno,
    })
    await noteam
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new dealmoney team member is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}



exports.getdealmoneyteam=async function (req,res,next){
    //it is model name
    await dteamSchema.find({})
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "dealmoneyteam data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}


exports.removeCar = async function (req, res, next) {
    // await Cars.findByIdAndRemove(
    await dteamSchema.findByIdAndUpdate(
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
        res.status(200).send({ success: true, msg: "dm soft removed", err: null });
      })
      .catch((e) =>
        res
          .status(200)
          .send({ success: false, msg: "something went wrong", err: e })
      );
  };


  exports.updateCar = async function (req, res, next) {
    await dteamSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          rowstatus:req.body.rowstatus,
          name:req.body.name,
          email:req.body.email,
          wsno: req.body.wsno,
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


