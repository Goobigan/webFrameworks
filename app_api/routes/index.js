const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
//router.get('/', ctrlOthers.index);
router.get('/Register', ctrlLocations.Register);
router.get('/SignIn', ctrlLocations.SignIn);
router.get('/Display',ctrlLocations.Display);
module.exports = router;
