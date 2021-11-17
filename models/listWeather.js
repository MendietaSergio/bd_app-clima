const mongoose = require("mongoose");

const listWeatherSchema = mongoose.Schema({
  nameCity: {
    type: String,
  },
  country: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lon: {
    type: Number,
  },
  temp_max: {
    type: Number,
  },
  temp_min: {
    type: Number,
  },
  temp: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("listWeather", listWeatherSchema);
