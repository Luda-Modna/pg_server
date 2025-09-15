const { User } = require('./../models');

module.exports.createUser = async (req, res) => {
  const { body } = req;
  try {
    const createUser = await User.create(body);
    if (!createUser) {
      return res.status(404).send('User not found');
    }
    res.status(201).send(createUser);
  } catch (err) {
    res.status(500).send('Server Eror');
  }
};

module.exports.getAllUsers = async (req, res) => {
  
  try {
    const foundUsers = await User.getAll({ limit: 10, offset: 0 });
    res.status(200).send(foundUsers);
  } catch (err) {
    res.status(500).send('Server Eror');
  }
};

module.exports.getByIdUser = async (req, res) => {
  const { id } = req.params;

  try {
    const foundUser = await User.getById(id);
    if (!foundUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(foundUser);
  } catch (err) {
    res.status(500).send('Server Eror');
  }
};

module.exports.updateUser = (req, res) => {};
module.exports.deleteUser = (req, res) => {};
