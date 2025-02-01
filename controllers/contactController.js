const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();

  res.status(200).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  res.status(200).json(contact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  await contact.deleteOne();

  res.status(200).json({ message: "Contact deleted successfully" });
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateContact);
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields Are Mendatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  deleteContact,
  updateContact,
  createContact,
};
