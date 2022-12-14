// console.log("------------------vishal---------------");


var express = require('express');
var router = express.Router();
var path = require('path');
const async = require('async');

//here we create 6 lenght unique id 
const { nanoid } = require("nanoid");

//path of model of cardetails itemModel
// const itemModel = require('../components/carsDetail/carsDetail.model');
const carDetailsModel = require('../components/carsDetail/carsDetail.model');


//bellow line commet out , for file run
// addCarsDetails();

function addCarsDetails() {
    console.log("pppppppppppppppppp")
    //path of excel file , new colection added 
    var filePath = path.resolve(__dirname, '../script_data/Newexcelone.xlsx');
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
        // getItemIncreamentID(function (err, no) {
        //     if (no.length != 0) {
        //         newData.Code = no[0].Code + 1
        //     } else {
        //         newData.Code = 1
        //     }

        // newData.modelName = excelfileHeader
        //mongodbfieldname= excelfileHeader

        newData.car_id = genrateId;
        newData.Sr_no = file.Sr_no;
        newData.brand = file.Brand;
        newData.model = file.Model;
        newData.varient = file.Varient;
        newData.price_print = file.Price_Print;
        newData.price = file.Price;
        newData.mileage_print = file.Mileage_Print;
        newData.mileage = file.Mileage;
        newData.engine = file.Engine;
        newData.transmission = file.Transmission;
        newData.fuel_type = file.Fuel_Type;
        newData.seating_capacity = file.Seating_Capacity;

        newData.colors = file.Colours;
        newData.pictures = file.Pictures;
        newData.factors_body_type = file.Factors_Body_Type;
        newData.factors_fuel_type = file.Factors_Fuel_Type;
        newData.factors_segment = file.Factors_Segment;
        newData.factors_transmission = file.Factors_Transmission;
        newData.factors_engine = file.Factors_Engine;

        newData.factors_no_of_gears = file.Factors_No_of_Gears;
        newData.factors_displacement_cc = file.Factors_Displacement_cc;
        newData.factors_emission_standard = file.Factors_Emission_Standard;
        newData.performance_peak_power_bhp_max_rpm = file.Performance_Peak_Power_BHP_Max_RPM;
        newData.performance_peak_torque_nm_max_rpm = file.Performance_Peak_Torque_Nm_Max_RPM;
        newData.performance_mileage_city_highway_in_kmpl = file.Performance_Mileage_City_Highway_in_KMPL;

        newData.dimensions_length_mm = file.Dimensions_Length_mm;
        newData.dimensions_width_mm = file.Dimensions_Width_mm;
        newData.dimensions_height_mm = file.Dimensions_Height_mm;
        newData.dimensions_weelbase_mm = file.Dimensions_Weelbase_mm;
        newData.dimensions_boot_space_l = file.Dimensions_Boot_Space_L;
        newData.dimensions_ground_clearance_mm = file.Dimensions_Ground_Clearance_mm;
        newData.dimensions_kerb_weight_kgs = file.Dimensions_Kerb_Weight_kgs;
        newData.dimensions_turning_radius_m = file.Dimensions_Turning_Radius_m;

        newData.key_features_air = file.Key_Features_Air_Conditioner;
        newData.key_features_climate_control = file.Key_Features_Climate_Control;
        newData.key_features_central_locking = file.Key_Features_Central_locking;
        newData.key_features_cd_player = file.Key_Features_CD_player;
        newData.key_features_power_steering = file.Key_Features_Power_Steering;
        newData.key_features_power_windows = file.Key_Features_Power_Windows;
        newData.key_features_steering_adjustment_rake_reach = file.Key_Features_Steering_Adjustment_Rake_Reach;
        newData.key_features_electrically_adjustable_driver_seat = file.Key_Features_Electrically_Adjustable_Driver_Seat;
        newData.key_features_steering_mounted_controls = file.Key_Features_Steering_Mounted_Controls;
        newData.key_features_rear_ac_vent = file.Key_Features_Rear_AC_vent;
        newData.key_features_remote_controlled_boot = file.Key_Features_Remote_Controlled_Boot;
        newData.key_features_rear_wiper = file.Key_Features_Rear_Wiper;
        newData.key_features_leather_seats = file.Key_Features_Leather_Seats;
        newData.key_features_electrically_adjustable_mirrors = file.Key_Features_Electrically_Adjustable_Mirrors;
        newData.key_features_cruise_control = file.Key_Features_Cruise_Control;
        newData.safety_features_anti_lock_braking_system_abs = file.Safety_Features_Anti_Lock_Braking_System_ABS;
        newData.safety_features_parking_sensors = file.Safety_Features_Parking_Sensors;
        newData.safety_features_airbag = file.Safety_Features_Airbag;
        newData.safety_features_traction_control = file.Safety_Features_Traction_Control;
        newData.capacities_fuel_capacity_l = file.Capacities_Fuel_Capacity_L;
        newData.capacities_seating_capacity = file.Capacities_Seating_Capacity;
        // newData.capacities = file.Capacities;
        newData.wheels_and_tyres_Tyre_specs_front = file.Wheels_and_Tyres_Tyre_Specs_Front;
        newData.wheels_and_tyres_Tyre_specs_rear = file.Wheels_and_Tyres_Tyre_Specs_Rear;

        var item = new carDetailsModel(newData)
        item.save((err, response) => {
            if (err) {
                console.log('err', err)
            } else {
                // finalResult.push(newData)
                outercb()
            }
        });


    }, function (err, result) {
        console.log("Cars Saving Done...")
    });
    // });


}




module.exports = router;
