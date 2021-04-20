const express = require("express");
const router = express.Router();

const {
  createContact,
  getALLContact,
} = require("../controllers/contact.controller");

const sendMail = require("../../sendmailer");

router.post("/sendMail", sendMail);
router.post("/add/contact", createContact);
router.get("/get/contact", getALLContact);
module.exports = router;
