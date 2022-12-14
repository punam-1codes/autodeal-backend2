const carsUserReview = require("./carUserReview.model");
const { nanoid } = require("nanoid");



exports.adduserreview = async function (req, res, next) {
    let genrateId = nanoid(6);

    let nuserreview = new carsUserReview({
        user_review_id: genrateId,
        user_title:req.body.user_title,
        user_review:req.body.user_review,
        user_rating:req.body.user_rating
    })
    await nuserreview
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new user review is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


exports.cuserreviews=async function (req,res,next){
    //it is model name
    await carsUserReview.find({}).select({
        _id: 1,
        rowstatus: 1,
        user_review_id: 1,
        user_title:1,
        user_review:1,
        user_rating:1,
        updatedAt:1
        
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
