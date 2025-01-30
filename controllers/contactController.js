const getContacts = (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact By ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact By ${req.params.id}` });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact Of ${req.params.id}` });
};

const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields Are Mendatory");
  }
  res.status(200).json({ message: `Create Contact` });
};

module.exports = {
  getContacts,
  getContact,
  deleteContact,
  updateContact,
  createContact,
};
