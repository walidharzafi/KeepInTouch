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

const getOneContact =async (req,res)=>{
  const {id} = req.params
  try {
    const singleContacte = await Contact.findOne({_id:id})
    if(singleContacte) return res.status(200).json(singleContacte)
  } catch (error) {
    
  }
}

const getALLContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json( contacts );
  } catch (error) {
    res.status(400).json(error);
  }
};
const findContact = async (req, res) => {
  const { date } = req.body;
  const { email } = req.body;
  // console.log(date);
  // console.log(new Date(date));
  try {
    if (date && email) {
      const result = await Contact.find({ email, date });
      if (result) return res.status(200).json(result);
    } else if (date && !email) {
      const result = await Contact.find({ date });
      if (result) return res.status(200).json(result);
    } else if (!date && email) {
      const result = await Contact.find({ email });
      if (result) return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = {
  createContact,
  getALLContact,
  findContact,
  getOneContact,
};
