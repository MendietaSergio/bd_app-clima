const mongoose = require("mongoose");

const listTeamSchema = mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  rol: {
    type: String,
  },
  port: {
    type: String,
  },
  description: {
    type: String,
  },
  avatar: {
      type:String
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("listTeam", listTeamSchema);
