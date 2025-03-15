import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema(
  {
    userId: String,
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    paires: {
      type: String,
      default: 1,
    },
    gender: {
      type: String,
      default: "male",
    },
    // .....................male.................
    topLenght: String,
    showlder: String,
    chest: String,
    sleeve: String,
    roundSleeve: String,
    tommy: String,
    wrist: String,
    neck: String,
    biceps: String,
    upperArm: String,
    armholeDepth: String,
    neckToShoulder: String,
    bottomLenght: String,
    waist: String,
    thigh: String,
    knee: String,
    seat: String,
    flap: String,
    waistToKnee: String,
    ankleHem: String,
    frontRise: String,
    backRise: String,
    shoulderToAnkle: String,
    shoulderToKnee: String,
    // //................female....................................///
    fneck: String,
    fShoulder: String,
    frontChestWidth: String,
    backChestWidth: String,
    bust: String,
    underBust: String,
    upperBust: String,
    fWaist: String,
    armhole: String,
    hips: String,
    fthigh: String,
    fknee: String,
    ankle: String,
    armLenght: String,
    shoulderToElbow: String,
    fullLength: String,
    shoulderToBust: String,
    shoulderToUBust: String,
    shoulderToWristF: String,
    shoulderToWristB: String,
    shoulderToHips: String,
    shoulderToKneel: String,
    blouseLength: String,
    trouserLenght: String,
    crotchDepth: String,
    sleeveLenght: String,
    froundSleeve: String,
    cuff: String,
    nipple: String,
    waistToHips: String,
    waistToKneel: String,
    waistToFloor: String,
    //>...........................Cap............................................//
    capLenght: String,
    capWidth: String,
    addMessage: String,
    collectionDate: Date,
    bookedDate: Date,
    image: String,
    measurementStatus: {
      type: String,
      default: "uncomplete",
    },
  },
  {
    timestamps: true,
  }
);

const measurement = mongoose.model("Measurement", measurementSchema);

export default measurement;
