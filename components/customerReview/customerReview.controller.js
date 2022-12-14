const customerReview = require("./customerReview.model");
const { nanoid } = require("nanoid");


exports.addcreview = async function (req, res, next) {
    let genrateId = nanoid(6);

    let ncreview = new customerReview({
        car_id: genrateId,
        // cr_car_img:req.body.cr_car_img,
        cr_customer_img: req.body.cr_customer_img,
        cr_customer_name: req.body.cr_customer_name,
        cr_publisher: req.body.cr_publisher,
        cr_car_brand: req.body.cr_car_brand,
        cr_car_model: req.body.cr_car_model,
        cr_location: req.body.cr_location,
        cr_description: req.body.cr_description,
        cr_star: req.body.cr_star,
    })
    await ncreview
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new customer review is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


exports.getallcreview=async function (req,res,next){
    await customerReview.find({})
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}
