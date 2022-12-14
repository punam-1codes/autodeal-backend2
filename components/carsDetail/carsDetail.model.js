const mongoose = require("mongoose")
const schema = mongoose.Schema;
const carsSchema = new schema({
    rowstatus:{
        type:Number,
        default:1
    },
    car_count:{
        type:Number,
        default:0
    },
    car_id:{
        type:String,
        //required:true
    },
    // car_img:{
    //     type:String,
    //     // required:true
    // },
    car_review:{
        type:Number,
        // required:true
    },
    brand:{
        type:String
    },
    model:{
        type:String,
        // required:true
    },
    varient:{
        type:String,
        // required:true
    },
    price_print:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    mileage_print:{
        type:String,
        //required:true
    },
    mileage:{
        type:Number,
        // required:true
    },
    engine:{
        type:String,
        // required:true
    },
    transmission:{
        type:String,
        // required:true
    },
    fuel_type:{
        type:String,
        // required:true
    },
    seating_capacity:{
        type:String,
        // required:true
    },
    colors:[{
        type:String
    }],
    pictures:[{
        type:String
    }],
    factors_body_type:{
        type:String,
        // required:true
    },
    factors_fuel_type:{
        type:String,
        // required:true
    },
    factors_segment:{
        type:String,
        // required:true
    },
    factors_transmission:{
        type:String,
        // required:true
    },
    factors_engine:{
        type:String,
        // required:true
    },
    factors_no_of_gears:{
        type:String,
        // required:true
    },
    factors_displacement_cc:{
        type:Number,
        // required:true
    },
    factors_emission_standard:{
        type:String,
        // required:true
    },
    performance_peak_power_bhp_max_rpm:{
        type:String,
        // required:true
    },
    performance_peak_torque_nm_max_rpm:{
        type:String,
        // required:true
    },
    performance_mileage_city_highway_in_kmpl:{
        type:String,
        // required:true
    },
    dimensions_length_mm:{
        type:String,
        // required:true
    },
    
    dimensions_height_mm:{
        type:String,
        // required:true
    },
    
    dimensions_width_mm:{
        type:String,
        // required:true
    },
    
    dimensions_weelbase_mm:{
        type:String,
        // required:true
    },
    dimensions_boot_space_l:{
        type:String,
        // required:true
    },
    dimensions_ground_clearance_mm:{
        type:String,
        // required:true
    },
    dimensions_kerb_weight_kgs:{
        type:String,
        // required:true
    },
    dimensions_turning_radius_m:{
        type:String,
        // required:true
    },
    key_features_air:{
        type:String,
        // required:true
    },
    key_features_central_locking:{
        type:String,
        // required:true
    },
    key_features_power_steering:{
        type:String,
        // required:true
    },
    key_features_steering_adjustment_rake_reach:{
        type:String,
        // required:true
    },
    key_features_steering_mounted_controls:{
        type:String,
        // required:true
    },
    key_features_remote_controlled_boot:{
        type:String,
        // required:true
    },
    key_features_leather_seats:{
        type:String,
        // required:true
    },
    key_features_cruise_control:{
        type:String,
        // required:true
    },
    key_features_climate_control:{
        type:String,
        // required:true
    },
    key_features_cd_player:{
        type:String,
        // required:true
    },
    key_features_power_windows:{
        type:String,
        // required:true
    },
    key_features_electrically_adjustable_driver_seat:{
        type:String,
        // required:true
    },
    key_features_rear_ac_vent:{
        type:String,
        // required:true
    },
    key_features_rear_wiper :{
        type:String,
        // required:true
    },
    key_features_electrically_adjustable_mirrors:{
        type:String,
        // required:true
    },
    
    safety_features_anti_lock_braking_system_abs:{
        type:String,
        // required:true
    },
    safety_features_parking_sensors:{
        type:String,
        // required:true
    },
    safety_features_airbag:{
        type:String,
        // required:true
    },
    safety_features_traction_control:{
        type:String,
        // required:true
    },
    capacities_fuel_capacity_l:{
        type:String,
        // required:true
    },
    capacities_seating_capacity:{
        type:String,
        // required:true
    },
    // capacities:{
    //     type:String,
    //     // required:true
    // },
    wheels_and_tyres_Tyre_specs_front:{
        type:String,
        // required:true
    },
    wheels_and_tyres_Tyre_specs_rear:{
        type:String,
        // required:true
    },
    tags:[{
        type:String
    }],
    


},{
    timestamps:true
})

//here we chnage collection name from cars to master_cars
const Cars = mongoose.model('master_cars',carsSchema);
module.exports = Cars;
