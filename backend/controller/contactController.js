const Contact = require("../model/contactSchema");
exports.contactController = async (req, res) => {
  try {
    const { email, name, phone, message } = req.body;
    const newUser = new Contact({
      email,
      name,
      phone,
      message,
    });

    const savedUser = await newUser.save();

    res.json({
      msg: "sumbit succsfully",
      savedUser,
    });

    await savedUser.deleteOne({ email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
