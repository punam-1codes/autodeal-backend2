const carsNews = require("./carsNews.model");
const { nanoid } = require("nanoid");


exports.addcarnews = async function (req, res, next) {
    let genrateId = nanoid(6);

    let ncarnews = new carsNews({
        carnews_id: genrateId,
        pictures:req.body.pictures,
        news_cartitle: req.body.news_cartitle,
        news_date: req.body.news_date,
        news_publisher: req.body.news_publisher,
        news_cardescription: req.body.news_cardescription,

    })
    await ncarnews
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new car news is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


exports.getnews=async function (req,res,next){
    await carsNews.find({}).select({
        _id: 1,
        rowstatus: 1,
        car_news_id: 1,
        pictures: 1,
        news_cartitle:1,
        news_date:1,
        news_publisher:1,
        news_cardescription:1,
        brand:1,
        model:1,
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



//get brand news 
exports.getBrandNews = async function (req, res, next) {
    var a=req.params.brand
    query1={ "brand" : req.params.brand}
    await carsNews.aggregate([
      { $match:{"$and":[{rowstatus: 1},query1]} },
 
      { $sort: { createdAt: 1 } },
    ])
  
  
    .then((d)=>{
      res
      .status(200)
      .send({success:true,msg:'data found',error:null,data:d});
    })
    .catch((e)=>{
      res.status(200).send({success:false,msg:null,error:e});
    })
  }
  


// exports.cexpertreviews=async function (req,res,next){
//     await carsNews.find({}).select({
//         _id: 1,
//         rowstatus: 1,
//         car_id: 1,
//         expert_reviews_img_url: 1,
//         expert_reviews_brand:1,
//         expert_reviews_stars:1,
//         expert_reviews_description:1,
//         expert_reviews_by:1,
//         expert_reviews_time:1
//     })
//     .then((d) => {
//         res
//           .status(200)
//           .send({ success: true, msg: "data found", error: null, data: d });
//       })
//       .catch((e) => {
//         res.status(200).send({ success: false, msg: null, error: e });
//       });
// }

// exports.ccarvideos=async function (req,res,next){
//     await carsNews.find({}).select({
//         _id: 1,
//         rowstatus: 1,
//         car_id: 1,
//         car_videos_link: 1,
//         car_videos_title:1,
//         car_videos_by:1,
//         car_videos_date:1,
//         car_views:1,
//         car_likes:1
//     })
//     .then((d) => {
//         res
//           .status(200)
//           .send({ success: true, msg: "data found", error: null, data: d });
//       })
//       .catch((e) => {
//         res.status(200).send({ success: false, msg: null, error: e });
//       });
// }