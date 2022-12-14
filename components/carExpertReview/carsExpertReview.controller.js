const carsExpertReview = require("./carsExpertReview.model");
const { nanoid } = require("nanoid");



exports.addexpertreview = async function (req, res, next) {
    let genrateId = nanoid(6);
    console.log("get added data in body",req.body);
    let nexpertreview = new carsExpertReview({
        expert_review_id: genrateId,
        // expert_reviews_img_url:req.body.expert_reviews_img_url,
        brand:req.body.brand,
        model:req.body.model,
        // expert_reviews_Model:req.body.expert_reviews_Model,
        expert_reviews_stars:req.body.expert_reviews_stars,
        expert_reviews_description:req.body.expert_reviews_description,
        expert_reviews_by:req.body.expert_reviews_by,
        expert_reviews_time:req.body.expert_reviews_time,
    })
    await nexpertreview
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new expert review is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


exports.cexpertreviews=async function (req,res,next){
    //it is model name
    await carsExpertReview.find({}).select({
        _id: 1,
        brand:1,
        model:1,
        rowstatus: 1,
        expert_review_id: 1,
        // expert_reviews_img_url: 1,
        // expert_reviews_Model:1,
        expert_reviews_stars:1,
        expert_reviews_description:1,
        expert_reviews_by:1,
        expert_reviews_time:1
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
