const testdrive = require("./testdrive.model");
const { nanoid } = require("nanoid");

var dateTime = new Date();

exports.addtestdrive = async function (req, res, next) {
    let genrateId = nanoid(6);
    // console.log("cascasc",genrateId);

    let nuser = new testdrive({
        // registration_id: genrateId,
        mobilenumber:req.body.mobilenumber,
        name:req.body.name,
        email:req.body.email,
        location:req.body.location,
        registrationdate:dateTime,
        userid:req.body.userid,
        slotbook:req.body.slotbook
    })
    await nuser
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new testdrive is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


exports.gettestdrive=async function (req,res,next){
    //it is model name
    await testdrive.find({}).select({
        _id: 1,
        rowstatus: 1,
        // registration_id:1,
        mobilenumber: 1,
        name:1,
        email:1,
        location:1,
        registrationdate:1,
        slotbook:1
    })
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}
