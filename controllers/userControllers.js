const { User } = require('./../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  try {
    const createUser = await User.create(body);
    if (!createUser) {
      return res.status(404).send('User not found');
    }
    res.status(201).send(createUser);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllUsers = async (req, res, next) => {

  const {pagination} = req
  
  try {
    const foundUsers = await User.getAll(pagination);
    res.status(200).send(foundUsers);
  } catch (err) {
    next(err);
  }
};

module.exports.getByIdUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundUser = await User.getById(id);
    if (!foundUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(foundUser);
  } catch (err) {
    next(err);
  }
};

module.exports.updateUser = (req, res, next) => {};
module.exports.deleteUser = (req, res, next) => {};
