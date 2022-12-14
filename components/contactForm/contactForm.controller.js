const ContactRequest = require('./contactForm.model')

exports.getAllContactRequest = async function (req,res,next) {

    await ContactRequest.aggregate([
        { $match: { rowstatus: 1 } },
        {
          $project: {
            _id: 1,
            rowstatus: 1,
            fullname: 1,
            mobile: 1,
            email: 1,
            subject: 1,
            createdAt: 1,
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
    
}
exports.getAllDeletedContactRequest = async function (req,res,next) {

    await ContactRequest.aggregate([
        { $match: { rowstatus: 0 } },
        {
          $project: {
            _id: 1,
            rowstatus: 1,
            fullname: 1,
            mobile: 1,
            email: 1,
            subject: 1,
            createdAt: 1,
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
    
}
exports.addContactRequest = async function (req,res,next) {

    const newContact = new ContactRequest({
        fullname:req.body.fullname,
        mobile:req.body.mobile,
        email:req.body.email,
        subject:req.body.subject,
        // securitycapcha:req.body.securitycapcha
    })
   await newContact.save()
        .then(() => {
        res
          .status(200)
          .send({ success: true, msg: "contact reqest is made", error: null});
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
  

}
exports.deleteContactRequest = async function (req,res,next) {

    await ContactRequest.findByIdAndUpdate(
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
          res.status(200).send({ success: true, msg: "contact request is removed", err: null });
        })
        .catch((e) =>
          res
            .status(200)
            .send({ success: false, msg: "something went wrong", err: e })
        );

}