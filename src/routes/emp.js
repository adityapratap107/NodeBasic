const express = require('express');
const router = express();
const {create,view} = require('../controller/emp');
const {loginFunction} = require('../controller/login');

// routes
router.post('/create',create);
router.get('/',view)

// // login route
// router.post('/login',loginFunction);

// exports
module.exports = router;