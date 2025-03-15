import Measurement from "../models/measurement.js";
import mongoose from "mongoose";

// @desc Get all Measurement POST
// @route GET /api/measurements
export const getAllMeasurements = async (req, res, next) => {
  try {
    const measurements = await Measurement.find({});
    res
      .status(200)
      .json({ success: true, result: measurements.length, data: measurements });
  } catch (error) {
    console.log("error in fetching measurement:", error.message);
    res.status(400).json({ success: false, message: "server Error" });
  }
};

// desc get single measurement
// @route GET /api/measurments/:id
export const getMeasurment = async (req, res) => {
  const { id } = req.params;

  try {
    const measurement = await Measurement.findById({ _id: id });
    res.status(200).json({ success: true, data: measurement });
  } catch (error) {
    console.log(`A reading with the id of ${id} was not found`, error.message);
    res.status(400).json({ success: false, message: "Server Error" });
  }
};

// @desc create a new measurement
// @route POST /api/measuremnts
export const createMeasurement = async (req, res) => {
  const measurement = req.body;
  if (!measurement.name || !measurement.phoneNumber) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all field" });
  }
  const newMeasurement = new Measurement(measurement);
  try {
    await newMeasurement.save();
    res.status(200).json({ success: true, data: newMeasurement });
  } catch (error) {
    console.log("error in creating a measurement:", error.message);
    res.status(400).json({ success: false, message: "server error" });
  }
};

// @desc delete a measurement
// @route DELETE /api/meansurements/:id
export const deleteMeasurement = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }

  try {
    await Measurement.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Deleted Successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Server Error" });
  }
};

// @desc update a measurement
//  @route PATCH /api/measurements/:id
export const updateMeasurement = async (req, res) => {
  const { id } = req.params;
  const measurement = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }
  try {
    const updateMeasurement = await Measurement.findByIdAndUpdate(
      id,
      measurement,
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: updateMeasurement,
      message: "Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
