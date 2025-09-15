const { Router } = require('express');
const { userController } = require('./../controllers');
const { validation, pagination } = require('../middleware');

const userRouter = Router();

userRouter
  .route('/')
  .post(validation.validateCustomerOnCreate, userController.createUser)
  .get(pagination.paginationUsers, userController.getAllUsers);

userRouter
  .route('/:id')
  .get(userController.getByIdUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
