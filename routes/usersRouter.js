const { Router } = require('express');

const userRouter = Router();

userRouter
  .route('/')
  .post((req, res) => {})
  .get((req, res) => {});


  userRouter
  .route('/:id')
  .get((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {});


module.exports = userRouter;
