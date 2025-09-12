const { Router } = require('express');
const userRouter = require('./usersRouter');
const phonesRouter = require('./phonesRouter');

const router = Router();

router.use('/users', userRouter);
router.use('/phones', phonesRouter);


module.exports = router;
