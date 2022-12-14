// console.log("------------------vishal carsnews---------------");


var express = require('express');
var router = express.Router();
var path = require('path');
const async = require('async');

//here we create 6 lenght unique id 
const { nanoid } = require("nanoid");

//path of model of cardetails itemModel
// const itemModel = require('../components/carsDetail/carsDetail.model');
const carnewsDetailsModel = require('../components/carNews/carsNews.model');


//bellow line commet out , for file run
// addCarsNewsDetails();

function addCarsNewsDetails() {
    console.log("pppppppppppppppppp")
    //path of excel file , new colection added 
    var filePath = path.resolve(__dirname, '../script_data/carsnews.xlsx');
    const excelToJson = require('convert-excel-to-json');
    const result = excelToJson({
        sourceFile: filePath,
        columnToKey: {
            '*': '{{columnHeader}}'
        }
    });
    //excel file bottom name 
    var data = result.Sheet1;
    data.shift();
    var i;
    var newArray = []
    // data.length
    for (var i = 0; i < data.length; i++) {
        if (Object.keys(data[i]).length > 1) {
            newArray.push(data[i]);
        }
    }
    console.log("pppppppppppppppppp", newArray)

    async.eachSeries(newArray, function (file, outercb) {
        console.log("vvvvvvvvvvvvvvvvvvvvvvvv", file)
        var newData = {};
        let genrateId = nanoid(6);

                newData.carnews_id= genrateId;
                newData.Sr_no = file.Sr_no;
                newData.pictures = file.Pictures;
                newData.news_cartitle = file.News_cartitle;
                newData.news_date = file.News_date;
                newData.news_publisher=file.News_publisher;
                newData.news_cardescription = file.News_cardescription;
                newData.brand=file.Brand;
                newData.model=file.Model;

                var item = new carnewsDetailsModel(newData)
                item.save((err, response) => {
                    if (err) {
                        console.log('err', err)
                    } else {
                        // finalResult.push(newData)
                        outercb()
                    }
                });


            }, function (err, result) {
                console.log("Cars News Saving Done...")
            });
        // });


}




module.exports = router;
