const express = require('express');
const loginRouter = express();
const {loginFunction} = require('../controller/login');
// login route
loginRouter.post('/',loginFunction);

module.exports = loginRouter;
