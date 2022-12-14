const carsVideos = require("./carsVideos.model");
const { nanoid } = require("nanoid");


exports.addCarVideo = async function (req, res, next) {
    let genrateId = nanoid(6);

    let ncarvideo = new carsVideos({
        car_video_id: genrateId,
        brand:req.body.brand,
        model:req.body.model,
        car_videos_link:req.body.car_videos_link,
        car_videos_title:req.body.car_videos_title,
        car_videos_by:req.body.car_videos_by,
        car_videos_date:req.body.car_videos_date,
        car_views:req.body.car_views,
        car_likes:req.body.car_likes
    })
    await ncarvideo
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new car video is added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}



exports.carvideos=async function (req,res,next){
    //it is model name
    await carsVideos.find({}).select({
        _id: 1,
        rowstatus: 1,
        _id: 1,
        rowstatus: 1,
        brand:1,
        model:1,
        car_video_id: 1,
        car_videos_link: 1,
        car_videos_title:1,
        car_videos_by:1,
        car_videos_date:1,
        car_views:1,
        car_likes:1
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


