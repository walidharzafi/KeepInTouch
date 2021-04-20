require("dotenv").config({ path: "./app/config/.env" });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
// app
const app = express();

// router
const contact = require("./app/routers/contact.routes");

// middlewarse
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/", contact);

// connection
const DATABASE_URL = process.env.DATABASE_URL;

const connection = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("coonection to db successfully");
  } catch (error) {
    console.log(error);
  }
};

connection();

// Port
const PORT = process.env.PORT;

// server
app.listen(PORT, () => {
  console.log(`server running at on port ${PORT}`);
});
