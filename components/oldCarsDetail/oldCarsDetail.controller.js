const oldCars = require("./oldCarsDetail.model");
const { nanoid } = require("nanoid");


exports.addoldcar = async function (req, res, next) {
    let genrateId = nanoid(6);

    let ncarnews = new oldCars({
    old_car_id: genrateId,
    old_model: req.body.old_model,
    old_brand: req.body.old_brand,
    old_varient: req.body.old_varient,
    old_price_print: req.body.old_price_print,
    old_price: req.body.old_price,
    old_mileage_print: req.body.old_mileage_print,
    old_mileage: req.body.old_mileage,
    old_engine: req.body.old_engine,
    old_transmission: req.body.old_transmission,
    old_fuel_type: req.body.old_fuel_type,
    old_seating_capacity: req.body.old_seating_capacity,
    // colors: req.body.colors,
    old_colors: req.body.old_colors,
    old_pictures: req.body.old_pictures,
    old_factors_body_type: req.body.old_factors_body_type,
    old_factors_fuel_type: req.body.old_factors_fuel_type,
    old_factors_segment: req.body.old_factors_segment,
    old_factors_transmission: req.body.old_factors_transmission,
    old_factors_engine: req.body.old_factors_engine,
    old_factors_no_of_gears: req.body.old_factors_no_of_gears,
    old_factors_displacement_cc: req.body.old_factors_displacement_cc,
    old_factors_emission_standard: req.body.old_factors_emission_standard,
    old_performance_peak_power_bhp_max_rpm:
      req.body.old_performance_peak_power_bhp_max_rpm,
    old_performance_peak_torque_nm_max_rpm:
      req.body.old_performance_peak_torque_nm_max_rpm,
    old_performance_mileage_city_highway_in_kmpl:
      req.body.old_performance_mileage_city_highway_in_kmpl,
    old_dimensions_length_mm: req.body.old_dimensions_length_mm,
    old_dimensions_width_mm: req.body.old_dimensions_width_mm,
    old_dimensions_height_mm: req.body.old_dimensions_height_mm,
    old_dimensions_weelbase_mm: req.body.old_dimensions_weelbase_mm,
    old_dimensions_boot_space_l: req.body.old_dimensions_boot_space_l,
    old_dimensions_ground_clearance_mm: req.body.old_dimensions_ground_clearance_mm,
    old_dimensions_kerb_weight_kgs: req.body.old_dimensions_kerb_weight_kgs,
    old_dimensions_turning_radius_m: req.body.old_dimensions_turning_radius_m,
    old_key_features_air: req.body.old_key_features_air,
    old_key_features_central_locking: req.body.old_key_features_central_locking,
    old_key_features_power_steering: req.body.old_key_features_power_steering,
    old_key_features_steering_adjustment_rake_reach:
      req.body.old_key_features_steering_adjustment_rake_reach,
    old_key_features_steering_mounted_controls:
      req.body.old_key_features_steering_mounted_controls,
    old_key_features_remote_controlled_boot:
      req.body.old_key_features_remote_controlled_boot,
    old_key_features_leather_seats: req.body.old_key_features_leather_seats,
    old_key_features_cruise_control: req.body.old_key_features_cruise_control,
    old_key_features_climate_control: req.body.old_key_features_climate_control,
    old_key_features_cd_player: req.body.old_key_features_cd_player,
    old_key_features_power_windows: req.body.old_key_features_power_windows,
    old_key_features_electrically_adjustable_driver_seat:
      req.body.old_key_features_electrically_adjustable_driver_seat,
    old_key_features_rear_ac_vent: req.body.old_key_features_rear_ac_vent,
    old_key_features_rear_wiper: req.body.old_key_features_rear_wiper,
    old_key_features_electrically_adjustable_mirrors:
      req.body.old_key_features_electrically_adjustable_mirrors,
    old_safety_features_anti_lock_braking_system_abs:
      req.body.old_safety_features_anti_lock_braking_system_abs,
    old_safety_features_parking_sensors: req.body.old_safety_features_parking_sensors,
    old_safety_features_airbag: req.body.old_safety_features_airbag,
    old_safety_features_traction_control: req.body.old_safety_features_traction_control,
    old_capacities_fuel_capacity_l: req.body.old_capacities_fuel_capacity_l,
    old_capacities_seating_capacity: req.body.old_capacities_seating_capacity,
    // capacities: req.body.capacities,
    old_wheels_and_tyres_Tyre_specs_front:
      req.body.old_wheels_and_tyres_Tyre_specs_front,
    old_wheels_and_tyres_Tyre_specs_rear: req.body.old_wheels_and_tyres_Tyre_specs_rear,
    old_cars_tags: req.body.old_cars_tags

    })
    await ncarnews
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "old car added", error: null, data: d });
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}

//get all old car data
exports.getoldcars=async function (req,res,next){
    await oldCars.find({}).select({})
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "old cars data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}

//get all available old cars
exports.getavailableoldcars = async function (req, res, next) {
    await oldCars.aggregate([
      { $match: { rowstatus: 1 } },
      { $sort: { old_model: 1 } },
    ])
      .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "available old car data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
  };

  exports.getcar = async function (req, res, next) {
    await oldCars.findById(req.params.id)
      .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
  
  
  };


exports.getoldcar = async function (req, res, next) {
    await oldCars.findById(req.params.id)
      .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "old car data found by id", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
};


exports.removeOldCar = async function (req, res, next) {
    // await Cars.findByIdAndRemove(
    await oldCars.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          rowstatus: 0,
        },
      },
      { new: true }
    )
      .then(() => {
        // console.log(data);
        res.status(200).send({ success: true, msg: "old car is removed", err: null });
      })
      .catch((e) =>
        res
          .status(200)
          .send({ success: false, msg: "something went wrong", err: e })
      );
  };



  exports.updateOldCar = async function (req, res, next) {
    await oldCars.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
            old_model: req.body.old_model,
            old_brand: req.body.old_brand,
            old_varient: req.body.old_varient,
            old_price_print: req.body.old_price_print,
            old_price: req.body.old_price,
            old_mileage_print: req.body.old_mileage_print,
            old_mileage: req.body.old_mileage,
            old_engine: req.body.old_engine,
            old_transmission: req.body.old_transmission,
            old_fuel_type: req.body.old_fuel_type,
            old_seating_capacity: req.body.old_seating_capacity,
            // colors: req.body.colors,
            old_colors:req.body.old_colors,
            old_pictures: req.body.old_pictures,
            old_factors_body_type: req.body.old_factors_body_type,
            old_factors_fuel_type: req.body.old_factors_fuel_type,
            old_factors_segment: req.body.old_factors_segment,
            old_factors_transmission: req.body.old_factors_transmission,
            old_factors_engine: req.body.old_factors_engine,
            old_factors_no_of_gears: req.body.old_factors_no_of_gears,
            old_factors_displacement_cc: req.body.old_factors_displacement_cc,
            old_factors_emission_standard: req.body.old_factors_emission_standard,
            old_performance_peak_power_bhp_max_rpm:
              req.body.old_performance_peak_power_bhp_max_rpm,
            old_performance_peak_torque_nm_max_rpm:
              req.body.old_performance_peak_torque_nm_max_rpm,
            old_performance_mileage_city_highway_in_kmpl:
              req.body.old_performance_mileage_city_highway_in_kmpl,
            old_dimensions_length_mm: req.body.old_dimensions_length_mm,
            old_dimensions_width_mm: req.body.old_dimensions_width_mm,
            old_dimensions_height_mm: req.body.old_dimensions_height_mm,
            old_dimensions_weelbase_mm: req.body.old_dimensions_weelbase_mm,
            old_dimensions_boot_space_l: req.body.old_dimensions_boot_space_l,
            old_dimensions_ground_clearance_mm: req.body.old_dimensions_ground_clearance_mm,
            old_dimensions_kerb_weight_kgs: req.body.old_dimensions_kerb_weight_kgs,
            old_dimensions_turning_radius_m: req.body.old_dimensions_turning_radius_m,
            old_key_features_air: req.body.old_key_features_air,
            old_key_features_central_locking: req.body.old_key_features_central_locking,
            old_key_features_power_steering: req.body.old_key_features_power_steering,
            old_key_features_steering_adjustment_rake_reach:
              req.body.old_key_features_steering_adjustment_rake_reach,
            old_key_features_steering_mounted_controls:
              req.body.old_key_features_steering_mounted_controls,
            old_key_features_remote_controlled_boot:
              req.body.old_key_features_remote_controlled_boot,
            old_key_features_leather_seats: req.body.old_key_features_leather_seats,
            old_key_features_cruise_control: req.body.old_key_features_cruise_control,
            old_key_features_climate_control: req.body.old_key_features_climate_control,
            old_key_features_cd_player: req.body.old_key_features_cd_player,
            old_key_features_power_windows: req.body.old_key_features_power_windows,
            old_key_features_electrically_adjustable_driver_seat:
              req.body.old_key_features_electrically_adjustable_driver_seat,
            old_key_features_rear_ac_vent: req.body.old_key_features_rear_ac_vent,
            old_key_features_rear_wiper: req.body.old_key_features_rear_wiper,
            old_key_features_electrically_adjustable_mirrors:
              req.body.old_key_features_electrically_adjustable_mirrors,
            old_safety_features_anti_lock_braking_system_abs:
              req.body.old_safety_features_anti_lock_braking_system_abs,
            old_safety_features_parking_sensors: req.body.old_safety_features_parking_sensors,
            old_safety_features_airbag: req.body.old_safety_features_airbag,
            old_safety_features_traction_control: req.body.old_safety_features_traction_control,
            old_capacities_fuel_capacity_l: req.body.old_capacities_fuel_capacity_l,
            old_capacities_seating_capacity: req.body.old_capacities_seating_capacity,
            // capacities: req.body.capacities,
            old_wheels_and_tyres_Tyre_specs_front:
              req.body.old_wheels_and_tyres_Tyre_specs_front,
            old_wheels_and_tyres_Tyre_specs_rear: req.body.old_wheels_and_tyres_Tyre_specs_rear,
            old_cars_tags: req.body.old_cars_tags,
  
        },
      },
      { new: true }
    )
      .then((data) => {
        console.log(data);
        res
          .status(200)
          .send({ success: true, msg: "old car data is updates", data: data, err: null });
      })
      .catch((e) =>
        res
          .status(200)
          .send({
            success: false,
            msg: "something went wrong",
            data: null,
            err: e,
          })
      );
  };




