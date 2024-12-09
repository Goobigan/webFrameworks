const express = require('express');
const router = express.Router();
const passport = require('passport');
const ctrlBooks = require('../controllers/books');
const ctrlAccounts = require('../controllers/accounts');
const Account = require('../models/accounts');

router
    .route('/Register')
    .get(ctrlAccounts.accountsLogin);
    
router
    .post('/Register', (req, res, next) => {
        Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
            if (err) {
              return res.render('register', { error : err.message });
            }
    
            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    res.redirect('/books');
                });
            });
        });
    });

router
    .route('/SignIn')
    .get(ctrlAccounts.accountsCreate);
router
    .post('/SignIn', passport.authenticate('local', { failureRedirect: '/SignIn', failureFlash: true }), (req, res, next) => {
        req.session.save((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/books');
        });
    });

router
    .route('/books')
    .get(ctrlBooks.booksList);

    
module.exports = router;
