const { User } = require('./../models');

module.exports.createUser = (req, res) => {};
module.exports.getAllUsers = (req, res) => {};
module.exports.getByIdUser = async (req, res) => {
  const { id } = req.params;

  try{  const foundUser = await User.getById(id);
  if(!foundUser){
  return  res.status(404).send('User not found')
  }
  res.status(200).send(foundUser)} catch(err){
    res.status(500).send('Server Eror')
  }


};
module.exports.updateUser = (req, res) => {};
module.exports.deleteUser = (req, res) => {};
