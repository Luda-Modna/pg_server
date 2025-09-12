const { Router } = require('express');

const phonesRouter = Router();

phonesRouter
  .patch('/')
  .post((req, res) => {})
  .get((req, res) => {});

phonesRouter
  .patch('/:id')
  .get((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {});

module.exports = phonesRouter;
