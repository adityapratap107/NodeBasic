const express = require('express');
const registerRouter = express();
const {registerFunction,getRegisteredUsers} = require('../../controller/registration/register');

registerRouter.post('/',registerFunction);
registerRouter.get('/',getRegisteredUsers);

module.exports = registerRouter;