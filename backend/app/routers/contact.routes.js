const express = require("express");
const router = express.Router();

const {
  createContact,
  getALLContact,
  getOneContact
} = require("../controllers/contact.controller");

const sendMail = require("../../sendmailer");

router.post("/sendMail/:id", sendMail);
router.post("/add/contact", createContact);
router.get("/get/contact", getALLContact);
router.get("/contact/singlecontact/:id", getOneContact);
module.exports = router;
