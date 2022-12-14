const mongoose = require("mongoose")
const schema = mongoose.Schema;
const oldCarsSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    old_car_count:{
        type:Number,
        default:0
    },
    old_car_id:{
        type:String,
        //required:true
    },
    // car_img:{
    //     type:String,
    //     // required:true
    // },
    old_car_review:{
        type:Number,
        // required:true
    },
    old_brand:{
        type:String
    },
    old_model:{
        type:String,
        // required:true
    },
    old_varient:{
        type:String,
        // required:true
    },
    old_price_print:{
        type:String,
        // required:true
    },
    old_price:{
        type:Number,
        // required:true
    },
    old_mileage_print:{
        type:String,
        //required:true
    },
    old_mileage:{
        type:Number,
        // required:true
    },
    old_engine:{
        type:String,
        // required:true
    },
    old_transmission:{
        type:String,
        // required:true
    },
    old_fuel_type:{
        type:String,
        // required:true
    },
    old_seating_capacity:{
        type:String,
        // required:true
    },
    old_colors:[{
        type:String
    }],
    old_pictures:[{
        type:String
    }],
    old_factors_body_type:{
        type:String,
        // required:true
    },
    old_factors_fuel_type:{
        type:String,
        // required:true
    },
    old_factors_segment:{
        type:String,
        // required:true
    },
    old_factors_transmission:{
        type:String,
        // required:true
    },
    old_factors_engine:{
        type:String,
        // required:true
    },
    old_factors_no_of_gears:{
        type:String,
        // required:true
    },
    old_factors_displacement_cc:{
        type:Number,
        // required:true
    },
    old_factors_emission_standard:{
        type:String,
        // required:true
    },
    old_performance_peak_power_bhp_max_rpm:{
        type:String,
        // required:true
    },
    old_performance_peak_torque_nm_max_rpm:{
        type:String,
        // required:true
    },
    old_performance_mileage_city_highway_in_kmpl:{
        type:String,
        // required:true
    },
    old_dimensions_length_mm:{
        type:String,
        // required:true
    },
    old_dimensions_height_mm:{
        type:String,
        // required:true
    },
    old_dimensions_width_mm:{
        type:String,
        // required:true
    },
    old_dimensions_weelbase_mm:{
        type:String,
        // required:true
    },
    old_dimensions_boot_space_l:{
        type:String,
        // required:true
    },
    old_dimensions_ground_clearance_mm:{
        type:String,
        // required:true
    },
    old_dimensions_kerb_weight_kgs:{
        type:String,
        // required:true
    },
    old_dimensions_turning_radius_m:{
        type:String,
        // required:true
    },
    old_key_features_air:{
        type:String,
        // required:true
    },
    old_key_features_central_locking:{
        type:String,
        // required:true
    },
    old_key_features_power_steering:{
        type:String,
        // required:true
    },
    old_key_features_steering_adjustment_rake_reach:{
        type:String,
        // required:true
    },
    old_key_features_steering_mounted_controls:{
        type:String,
        // required:true
    },
    old_key_features_remote_controlled_boot:{
        type:String,
        // required:true
    },
    old_key_features_leather_seats:{
        type:String,
        // required:true
    },
    old_key_features_cruise_control:{
        type:String,
        // required:true
    },
    old_key_features_climate_control:{
        type:String,
        // required:true
    },
    old_key_features_cd_player:{
        type:String,
        // required:true
    },
    old_key_features_power_windows:{
        type:String,
        // required:true
    },
    old_key_features_electrically_adjustable_driver_seat:{
        type:String,
        // required:true
    },
    old_key_features_rear_ac_vent:{
        type:String,
        // required:true
    },
    old_key_features_rear_wiper :{
        type:String,
        // required:true
    },
    old_key_features_electrically_adjustable_mirrors:{
        type:String,
        // required:true
    },
    
    old_safety_features_anti_lock_braking_system_abs:{
        type:String,
        // required:true
    },
    old_safety_features_parking_sensors:{
        type:String,
        // required:true
    },
    old_safety_features_airbag:{
        type:String,
        // required:true
    },
    old_safety_features_traction_control:{
        type:String,
        // required:true
    },
    old_capacities_fuel_capacity_l:{
        type:String,
        // required:true
    },
    old_capacities_seating_capacity:{
        type:String,
        // required:true
    },
    // capacities:{
    //     type:String,
    //     // required:true
    // },
    old_wheels_and_tyres_Tyre_specs_front:{
        type:String,
        // required:true
    },
    old_wheels_and_tyres_Tyre_specs_rear:{
        type:String,
        // required:true
    },
    old_cars_tags:[{
        type:String
    }],
    


},{
    timestamps:true
})

//here we chnage collection name from cars to master_cars
const oldCars = mongoose.model('master_old_cars',oldCarsSchema);
module.exports = oldCars;
