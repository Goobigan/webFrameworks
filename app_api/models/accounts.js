const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const accountsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  },
},{collection: 'accounts'});

accountsSchema.plugin(passportLocalMongoose);


const accountModel =mongoose.model('accounts', accountsSchema);

module.exports = accountModel;