const express = require('express');
const router = express.Router();
const ctrlBooks = require('../controllers/books');
const ctrlSignIn = require('../controllers/SignIn');
const ctrlRegister = require('../controllers/Register');


router.get('/Register', ctrlRegister.Register);
router.get('/SignIn', ctrlSignIn.SignIn);
router.get('/books',ctrlBooks.books);

module.exports = router;
