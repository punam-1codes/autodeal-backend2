
module.exports   = function(mongoose){
    try {
        const mongoUrl = 'mongodb://192.168.1.44:27017/myapp';
        // mongoose.connect("mongodb://localhost:27017/myapp",(err)=>
        // mongoose.connect("mongodb://192.168.1.44/myapp",(err)=>
        // const mongoUrl = 'mongodb://127.0.0.1:27017/myapp';

        mongoose.connect(mongoUrl,
  (err) => 
        {
            if(err) {
                console.log(`Error >>> `,err);
            } else {
                console.log("DB is connected");
            }
        })
    } catch (error) {
        console.log(`Error >>> `,error);    }


}



// const mongoUrl = 'mongodb://172.16.1.51:27017/doctoroncall';
// mongoose_1.default.connect(mongoUrl, { user: 'itdev-user', pass: 'FamCarDB@123', auth: { authdb: "admin" } },
//   (err) => {
//     if (err) {
//       console.log("Error connect to mongoose", err)
//     } else {
//       console.log("mongooose connected at SIT database")
//     }
//   });