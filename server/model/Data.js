const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    node: {
        type: String,
        required: true,
    },
    sensorType: {
        type: Number,
        required: true,
    },
    sensorData: {
        type: Array,
        default: [],
        required: true,
    },
    sensorCalib: {
        type: Array,
        default: [0, 0, 0],
        required: true,
    },
    timestamp: {
        type: Array,
        default: [],
        required: true,
    }
  });
