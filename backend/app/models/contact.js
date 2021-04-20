const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const Contact = new Schema(
  {
    firstName: { type: String, trim: true, require: true },
    lastName: { type: String, trim: true, require: true },
    email: { type: String, trim: true, require: true },
    phone: { type: Number, require: true },
    message: { type: String, trim: true, require: true },
  },
  { timestamps: true }
);

module.exports = model("contacts", Contact);
