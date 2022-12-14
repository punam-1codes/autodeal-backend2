const inquiries = require("./inquiries.model");


var dateofInquiry=new Date()

exports.addInquiries = async function (req, res, next) {
    
    

    let newinquiries = new inquiries({
        name: req.body.name,
        mobilenumber:req.body.mobilenumber,
        inquiryDate:dateofInquiry
    })
    await newinquiries
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new inquiries is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


exports.getInquiries=async function (req,res,next){
    await inquiries.find({}).select({
        _id: 1,
        rowstatus: 1,
        name: 1,
        mobilenumber:1,
        inquiryDate:1
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

