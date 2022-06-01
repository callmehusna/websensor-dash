const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema(
    {    
        node: {
            type: String,
            required: true,
            unique: true,
    },
        sensors: {
            type: Array,
            required: true,
            default: [0, 0, 0, 0],
    },
},
{ timestamps: true }

);