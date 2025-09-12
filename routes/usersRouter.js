const { Router } = require('express');

const userRouter = Router();

userRouter
  .patch('/')
  .post((req, res) => {})
  .get((req, res) => {});


  userRouter
  .patch('/:id')
  .get((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {});


module.exports = userRouter;
