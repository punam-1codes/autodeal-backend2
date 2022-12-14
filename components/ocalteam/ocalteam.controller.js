const oteamSchema = require("./ocalteam.model");
const { nanoid } = require("nanoid");


exports.addocatteam = async function (req, res, next) {
    let genrateId = nanoid(6);

    let noteam = new oteamSchema({
        name:req.body.name,
        email:req.body.email,
        wsno:req.body.wsno,
    })
    await noteam
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new ocal team member is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}



exports.getocalteam=async function (req,res,next){
    //it is model name
    await oteamSchema.find({})
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "ocalteam data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}


