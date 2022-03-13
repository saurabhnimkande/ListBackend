const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, requied: true },
    last_name: { type: String, requied: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("user", userSchema);
