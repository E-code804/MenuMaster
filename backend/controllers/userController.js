const User = require("../models/UserModel");

const getUser = async (req, res) => {
  const { userName } = req.params;

  const user = await User.findOne({ userName: userName });

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { userName, userPassword } = req.body;

  const user = await User.findOne({ userName: userName });

  if (user) {
    return res.status(409).json({ error: "Username already exists/is taken." });
  }

  try {
    const user = await User.create({
      userName,
      password: userPassword,
    });
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getUser,
  createUser,
};
