const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  avgMileWalking: { type: Number, required: true },
  avgMileJogging: { type: Number, required:false  },
  avgMileBiking: { type: Number, required: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
