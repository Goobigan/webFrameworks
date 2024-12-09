const mongoose = require('mongoose');
const Accounts = mongoose.model('accounts');

const accountsSearch = async function (req, res) {
  console.log("Fetching accounts...");
  try {
      const accounts = await Accounts.find({username: req.body.username });   
      return res.json(accounts);
  } catch (err) {
      console.error("Error fetching accounts:", err);
      return res.status(500).json({ "error": "An error occurred while fetching accounts" });
  }
};


const accountsCreate = function (req, res) {
    if (accountsSearch.length != 0){
        return res.status(400).json({ "error": "Username was taken" });
    }

    Account
        .create({
            username: req.body.username,
            password: req.body.password,
        })
        .then ((err, account) => {
            if(err){
                res
                    .status(400)
                    .json(err);
            } else {
                res
                    .status(201)
                    .json(account);
            }
        });
};  

const accountsLogin = async function (req, res) {
    if (accountsSearch.length != 0){
        return res.status(400).json({ "error": "Account not found" });
    }
    try {     
        return res.status(200).json(accounts);
    } catch (err) {
        console.error("Error fetching accounts:", err);
        return res.status(500).json({ "error": "An error occurred while fetching accounts" });
    }
};

module.exports = {
    accountsSearch, accountsCreate, accountsLogin
};