const users = require("./user.model");
const { nanoid } = require("nanoid");
const { notify } = require("../../app");
const testdrivess = require("../testdrive/testdrive.model");
const superagent_1=require ("superagent");



var dateTime = new Date();



exports.adduser = async function (req, res, next) {
    let genrateId = nanoid(6);

    let nuser = new users({
        // user_id: genrateId,
        mobilenumber:req.body.mobilenumber,
        name:req.body.name,
        logindate:dateTime
    })
    await nuser
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new user is added", error: null, data: d });
        // console.log("d data",d._id.valueOf());
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


exports.getusers=async function (req,res,next){
    //it is model name
    console.log("req====>",req.body)
    await users.find({mobilenumber:req.body.mobilenumber}).select({
        _id: 1,
        rowstatus: 1,
        // user_id: 1,
        mobilenumber: 1,
        name:1,
        logindate:1
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



exports.otpapi=async function (req,res){
var userdata,testdrive,opt,optone;
    console.log("body :",req.body);
    if(req.body.mobilenumber.length==10){
        await users.findOne({mobilenumber:req.body.mobilenumber}).select({
            _id: 1,
            rowstatus: 1,
            // user_id: 1,
            mobilenumber: 1,
            name:1,
            logindate:1
        })
        .then((d) => {
           console.log("d----->",d);
            userdata=d;
          })
          .catch((e) => {
            res.status(200).send({ success: false, msg: null, error: e });
          });
          if(userdata){
            console.log("user present");
            await testdrivess.findOne({mobilenumber:req.body.mobilenumber}).select({
                _id: 1,
                rowstatus: 1,
                // user_id: 1,
                mobilenumber: 1,
                name:1,
                email:1,
                location:1,
                registrationdate:1
            })
            .then((d) => {
               console.log("d----->",d);
                testdrive=d;
              })
              .catch((e) => {
                res.status(200).send({ success: false, msg: null, error: e });
              });
          }else{
              console.log("user not present")
          }
          if(userdata && testdrive){
              console.log("login user",testdrive);
          otpsend(userdata.mobilenumber)
          .then((result1) => {
            console.log("opt=====>",result1);
                  var senddata={
                 "name":userdata.name,
                 "mobilenumber":userdata.mobilenumber,
                 "otp": result1,
                 "email":testdrive.email,
                 "location":testdrive.location,
                 "_id_login":userdata._id,
                 "_id_register":testdrive._id
              }
              if(senddata){
                var date=new Date()
                users.update({_id:userdata._id}, {$set:{logindate:date}}, function(err, result) {
                    if (err){
                        console.log("error in update user collection logindate");
                    }
                        //do something.
                });
                res .status(200).send({ success: true, msg: "otp send", error: null, data: senddata });
                
              }else{
                res .status(200).send({ success: false, msg: "otp not send", error: null, data: '' });
              }
          });
           }else{
              console.log("non login user");
              res .status(200).send({ success: false, msg: "non login user", error: null, data: '' });
          }
      //  console.log("notify-->",notify.name,notify.mobilenumber)
    }else{
        console.log("invalid mobile no")
    }
   // res.status(200);
}



 function otpsend(phoneno, callback) {
 return new Promise(function (resolve, reject) {
    if (!phoneno) {
        console.log("data not found");
    }
    else {
	console.log("hhhhhhhhhhhh",phoneno);
        if (phoneno == '9876543210') {
		console.log(" i am here my number is 9876543210")
            const OTP = 1111;
          
        } else {
		console.log(" this is existings no")
            const OTP = Math.floor(1000 + Math.random() * 9000);
          
            console.log("OPT",OTP)

            const smsData = {
                mobileNo: phoneno,
                msg: "Use " + OTP + " as your login OTP. Your OTP is confidential.familycare never calls you asking for OTP." + "DealMoney Autodeal "
            };

            const to = "91" + smsData.mobileNo;
            const msg = smsData.msg;
            const url = "http://sms.cell24x7.com:1111/mspProducerM/sendSMS?user=familycare&pwd=Info@2020&sender=FMLYCR&mobile=" + to + "&msg=" + msg + "&mt=0&tempId=1007048267384316187";
            console.log(url);

            superagent_1.get(url)
                .end(function (err, response) {
                    if (err) {
                        console.log("function error", err);
                        reject(err);
                    }
                    else {
                     console.log("opt send",OTP);
                     resolve (OTP);
                   
                    }
        });
    }
        }
    });
};



exports.nonloginotpapi= async function (req,res){
    var adduser,testdrive , testdriveid , getdata;
    console.log("req.body",req.body);
    //mobile,name,email


    if(req.body.mobilenumber.length==10){
        let nuser = new users({
            // user_id: genrateId,
            mobilenumber:req.body.mobilenumber,
            name:req.body.name,
            logindate:dateTime
        })
        await nuser
        .save()
        .then((d)=>{
            adduser=d;
            console.log("adduser",adduser);
            // console.log("d data",d._id.valueOf());
        })
        .catch((e)=>{
           console.log("error=>",e)
        })

        if(adduser){
            let nuser1 = new testdrivess({
                // registration_id: genrateId,
                mobilenumber:req.body.mobilenumber,
                name:req.body.name,
                email:req.body.email,
                location:req.body.location,
                registrationdate:dateTime,
                userid:adduser._id.valueOf()
            })
            await nuser1
            .save()
            .then((d)=>{
               testdrive=d;
               console.log("testdrive",testdrive);
            })
            .catch((e)=>{
               console.log("error=====>",e)
            })
        }

        if(adduser && testdrive){
                
          otpsend(req.body.mobilenumber)
          .then((result1) => {
            console.log("opt=====>",result1);
            testdriveid=testdrive._id.valueOf()
            testdrivess.findOne({_id:testdriveid}).select({
                _id: 1,
                rowstatus: 1,
                // user_id: 1,
                mobilenumber: 1,
                name:1,
                email:1,
                location:1,
                registrationdate:1
            })
            .then((d) => {
               console.log("d new user id----->",d);
               getdata=d;

               if(getdata){
                var senddata={
                    "name":getdata.name,
                    "mobilenumber":getdata.mobilenumber,
                    "otp": result1,
                    "email":getdata.email,
                    "location":getdata.location,
                    "user_id":getdata._id
                   //  "_id_login":userdata._id,
                   //  "_id_register":testdrive._id
                 }
                 res .status(200).send({ success: true, msg: "otp send", error: null, data: senddata });
                 console.log("senddata data nonloginotpapi",senddata);
              }else{
                  console.log("data not store");
                  res .status(200).send({ success: false, msg: "otp not send", error: null, data: '' });
              }

              })
              .catch((e) => {
                res.status(200).send({ success: false, msg: null, error: e });
              });
              
          });
            
        }


    }
}



// exports.useraddcars=async (req,res)=>{
//     console.log("useraddcars req body",req.body);

//     if(req.body.register_no){
//         console.log("if condition is call",req.body.register_no);
//         await testdrivess.findOneAndUpdate(
//             {
//                 mobilenumber: req.body.register_no,
//                 // details: { $elemMatch: { _id: req.params.employeeId } } 
                
//             }, // FILTER
//                 {
//                     $set: {
//                       "viewcars":"cars one" // UPDATE
//                     },
//                 },
//         )
//     }
//     else{
//         console.log("user id not get in backend");
//     }


    
// }


exports.useraddcars=async (req,res)=>{
    // checkPreviousData(req.body.register_id, function (err, previousData) {
    //     if (err) {
    //         res.status(400).send({ status: false, msg: "Something Went Wrong", err: err })
    //     } else {

    if(req.body.register_no){
         await testdrivess.find({ mobilenumber: req.body.register_no}).then((previousData)=>{
            //  console.log("previousData------->",previousData[0].viewcars);
             previousData[0].viewcars.push(req.body.carno)
             console.log("register user id",req.body.register_no);
             var newabc=previousData[0].viewcars
             console.log("newabc------->",newabc);
             console.log("previousData after------->",previousData[0].viewcars);
            //  const updateDocument = {
            //     $set: { "viewcars": previousData[0].viewcars }
            //   };
            testdrivess.findOneAndUpdate(
                    {
                        mobilenumber: req.body.register_no,
                        
                        
                        // updateDocument
                        
                        // details: { $elemMatch: { _id: req.params.employeeId } } 
                        
                    }, // FILTER
                        {
                            $set: {
                            //    "rowstatus":1,
                            //   new: true,
                              viewcars:previousData[0].viewcars // UPDATE,
                            },
                        },
                        {new: true},
                        (err, doc) => {
                            if (err) {
                                console.log("Something wrong when updating data!");
                            }
                        
                            console.log(doc);
                        }

                )
      })
      .catch((e)=>{
        res.status(200).send({success:false,msg:null,error:e});
      })
    }     
    else{
        console.log("user id not get in backend");
    }  

    // console.log("useraddcars req body",req.body);
    
};






exports.totalPrice= async function(req,res,next){
    var a=req.body
  
    var modelA={"model":req.body.model}

    if(req.body.mobilenumber){
        await testdrivess.aggregate([
            {$unwind:"$viewcars"},
            {
                $group:{_id: "$viewcars.rowstatus",
                total: { $sum: "$viewcars.price"}}
            }
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
    else{
        console.log("here we get request",req.body);
    }
    
  }






  exports.updateData=async function (req,res){
    console.log("req.body mobile number from frontend",req.body.mobilenumber);
    if(req.body.mobilenumber.length==10){
      await testdrivess.findOne({"mobilenumber":req.body.mobilenumber})
      .then((d) => {
           //here we get user data if we get data in testdrive collection , if we not get response we get null value
           console.log("testdrivess findOne d----->",d);
           tdUserData=d
          })
          .catch((e) => {
            res.status(200).send({ success: false, msg: null, error: e });
          });
          if(tdUserData){
            console.log("testdrive user present",tdUserData);
            testdrivess.updateOne({"mobilenumber":req.body.mobilenumber},{
                              $set: {
                                        name:req.body.name,
                                        email:req.body.email,
                                        mobilenumber: req.body.mobilenumber,
                                        location:req.body.location,
                                        slotbook:req.body.slotbook
                                      },
                            }, { new: true })
                            .then((d) => {
                              //here we get response true and false
                              console.log("updateOne testdrive d----->",d);
                               testdriveUData=d;

                               //after update testdrive data then we update user collection data
                               users.findOneAndUpdate({"mobilenumber":req.body.mobilenumber},{
                                                          $set: {
                                                            name:req.body.name,
                                                            mobilenumber: req.body.mobilenumber,
                                                            logindate:dateTime
                                                          },
                                                        },{ new: true })
                                                        .then((d) => {
                                                          console.log("users collection d----->",d);
                                                           userdataUpdate=d;
                                                         })
                                                         .catch((e) => {
                                                           res.status(200).send({ success: false, msg: null, error: e });
                                                         });
                                                        

                             })
                             .catch((e) => {
                               res.status(200).send({ success: false, msg: null, error: e });
                             });
          }
          else{
            console.log("testdrive user not update, new data add in testdrive and user collection");
            console.log("mobile number in else part",req.body.mobilenumber);
            if(req.body.mobilenumber.length==10){
              await testdrivess.findOneAndUpdate({"mobilenumber":req.body.mobilenumber},{
                $set: {
                          name:req.body.name,
                          email:req.body.email,
                          mobilenumber: req.body.mobilenumber,
                          registrationdate:dateTime,
                          // location:req.body.location,
                          // slotbook:req.body.slotbook
                        },
              },{upsert:true})
              .then((d) => {
                //here we get user data if we get data in testdrive collection , if we not get response we get null value
                console.log("testdrivess insert new data d----->",d);
                tdInsertUserData=d
                console.log("check null present or not",tdInsertUserData);
               })
               .catch((e) => {
                 res.status(200).send({ success: false, msg: null, error: e });
               });
               if(tdInsertUserData==null){
                await users.findOneAndUpdate({"mobilenumber":req.body.mobilenumber},{
                  $set: {
                            name:req.body.name,
                            // email:req.body.email,
                            mobilenumber: req.body.mobilenumber,
                            logindate:dateTime,
                            // location:req.body.location,
                            // slotbook:req.body.slotbook
                          },
                },{upsert:true})
                .then((d) => {
                  //here we get user data if we get data in testdrive collection , if we not get response we get null value
                  console.log("users insert new data last d----->",d);
                  tdInsertUserDataL=d
                  console.log("users check null present or not",tdInsertUserDataL);
                 })
                 .catch((e) => {
                   res.status(200).send({ success: false, msg: null, error: e });
                 });
               }
               else{
                 console.log("data not insert in user collection");
               }
            }else{
              console.log("not insert new data in testdrive collection");
            }
          }

    }else{
      console.log("error occurs");
      //here we add user if not present in test drive or users collection
      // await testdrivess.insert([{
      //   name:req.body.name,
      //   email:req.body.email,
      //   mobilenumber: req.body.mobilenumber,
      // }])
    }
  }









  //page 43 and 44 
  
exports.locationDate = async function (req, res, next) {
  // console.log("req.params.mobilenumber",req.params.mobilenumber);
  console.log("req.body.mobilenumber",req.body.mobilenumber);
  await testdrivess.findOneAndUpdate(
    // {mobilenumber:req.params.mobilenumber},
    {mobilenumber:req.body.mobilenumber},
    {
      $set: {
        location:req.body.location,
        slotbook:req.body.slotbook,
      },
    },
    { new: true }
  )
    .then((data) => {
      console.log(data);
      res
        .status(200)
        .send({ success: true, msg: "location and slotbook data is updates", data: data, err: null });
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



//page no 44 
exports.dateandTime = async function (req, res, next) {
  // console.log("req.params.mobilenumber",req.params.mobilenumber);
  console.log("req.body.mobilenumber",req.body.mobilenumber);
  await testdrivess.findOneAndUpdate(
    {mobilenumber:req.body.mobilenumber},
    // {mobilenumber:req.params.mobilenumber},
    {
      $set: {
        testdrivedate:req.body.testdrivedate,
        testdrivetime:req.body.testdrivetime,
      },
    },
    { new: true }
  )
    .then((data) => {
      console.log(data);
      res
        .status(200)
        .send({ success: true, msg: "testdrivedate and testdrivetime data is updates", data: data, err: null });
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





//here we get data by using mobile number it for TESTDRIVE DATABASE
exports.nouserData=async function (req,res,next){
  //it is model name
  // console.log(req.params.mobilenumber);
  console.log(req.body.mobilenumber);
  await testdrivess.find({mobilenumber:req.body.mobilenumber}).select({
      _id: 1,
      rowstatus: 1,
      // registration_id:1,
      mobilenumber: 1,
      name:1,
      email:1,
      location:1,
      registrationdate:1,
      // slotbook:1,
      testdrivedate:1,
      testdrivetime:1,
      viewcars:1,
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


//acitve user and soft deleted user
exports.usersData= async function(req,res,next){


  let startdate=new Date(req.body.startDateISO)
  startdate.setDate(startdate.getDate() + parseInt(1))
  console.log("get next date",startdate);

  
  let enddate=new Date(req.body.endDateISO)
  enddate.setDate(enddate.getDate() + parseInt(1))
  console.log("get next date",enddate);


  query1={
    createdAt:
    {$gte:startdate,
     $lte:enddate}
  }
  console.log("get date range query",query1);
  await users.aggregate([
    { $match:{"$and":[query1]} },
    {$group:{_id:"$rowstatus", count: { $sum: 1 }}},
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
  
  
  
  
  



