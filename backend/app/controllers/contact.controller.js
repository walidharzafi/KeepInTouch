const Contact = require('../models/contact');

const createContact = async (req, res) => {
  // const { firstName, lastName, email, phone, message } = req.body;
  const addContact = new Contact({
    ...req.body
  });
  const contact = await addContact.save();
  try {
    
    res.json({ message: "contact added" });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getALLContact = async (req, res) => {
  try {
    const cotacts = await Contact.find();
    res.status(200).json({ contacts: cotacts });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  createContact,
  getALLContact,
};
