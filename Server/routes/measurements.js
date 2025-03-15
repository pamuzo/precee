import express from "express";
import mongoose from "mongoose";
import {
  getAllMeasurements,
  getMeasurment,
  createMeasurement,
  deleteMeasurement,
  updateMeasurement,
} from "../controllers/measurementController.js";

const router = express.Router();

// All measeurement in database
router.get("/", getAllMeasurements);

//  get a signle measurement
router.get("/:id", getMeasurment);

// create new  measurement
router.post("/", createMeasurement);

// Delete a measurement
router.delete("/:id", deleteMeasurement);

// Update a measurement
router.patch("/:id", updateMeasurement);

export default router;
