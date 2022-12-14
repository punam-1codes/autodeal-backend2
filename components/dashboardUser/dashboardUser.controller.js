const dashboardUser = require("./dashboardUser.model");
const { nanoid } = require("nanoid");

//add dash user
exports.addDashUser = async function (req, res, next) {
    let generateId = nanoid(6);

    let ndashuser = new dashboardUser({
        dashuserid: generateId,
        printusername:req.body.printusername,
        password:req.body.password,
        email:req.body.email,
        username:req.body.username
    })
    await ndashuser
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new dash user added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


//get all dash user
exports.getAllDashUsers=async function (req,res,next){
    //it is model name
    await dashboardUser.find({}).select({
        _id: 1,
        rowstatus: 1,
        printusername:1,
        password:1,
        email: 1,
        dashuserid:1,
        username:1
    })
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "get all dash users", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}

//get present dash user
exports.getDashUsers = async function (req, res, next) {
    await dashboardUser.aggregate([
      { $match: { rowstatus: 1 } },
      { $sort: { printusername: 1 } },
    ])
      .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "present dash user found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
  };



//get dashuser by id
exports.getDashUserById = async function (req, res, next) {
    await dashboardUser.findById(req.params.id)
      .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "dash user id found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
  
  
  };


  exports.getDashPrintUser = async function (req, res, next) {
    await dashboardUser.find({printusername:req.params.printusername})
      .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "dash print user found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
  
  
  };

//remove dash user by id
exports.removeDashUserById = async function (req, res, next) {
    // await Cars.findByIdAndRemove(
    await dashboardUser.findByIdAndUpdate(
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
        res.status(200).send({ success: true, msg: "dash user remove softly", err: null });
      })
      .catch((e) =>
        res
          .status(200)
          .send({ success: false, msg: "something went wrong", err: e })
      );
  };


  //update dash user using id
  
exports.updateDashUser = async function (req, res, next) {
    await dashboardUser.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
            printusername:req.body.printusername,
            password:req.body.password,
            email: req.body.email,
            username:req.body.username
        },
      },
      { new: true }
    )
      .then((data) => {
        console.log(data);
        res
          .status(200)
          .send({ success: true, msg: "dash board user data update", data: data, err: null });
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


  
exports.matchLoginDashUser= async function(req,res,next){
    console.log("here we get dash board login request",req.body);
  
    var printusername={"printusername":req.body.printusername}

    var printuserpassword={"password":req.body.password}
  
   
  
    await dashboardUser.aggregate([
      { $match:{"$and":[{rowstatus: 1},printusername,printuserpassword]} },
      {
        $project: {
          _id: 1,
          rowstatus: 1,
          printusername:1,
          password:1,
          email:1,
          dashuserid:1,
          username:1,
        },
      },
    ])
    .then((d)=>{
      res
      .status(200)
      .send({success:true,msg:'login user found',error:null,data:d});
    })
    .catch((e)=>{
      res.status(200).send({success:false,msg:null,error:e});
    })
  }
  
  
  
  
  
  


