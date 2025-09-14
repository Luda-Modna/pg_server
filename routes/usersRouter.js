const { Router } = require('express');
const { userController } = require('./../controllers');

const userRouter = Router();

userRouter
  .route('/')
  .post(userController.createUser)
  .get(userController.getAllUsers);

userRouter
  .route('/:id')
  .get(userController.getByIdUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
