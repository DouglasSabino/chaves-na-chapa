const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
  celphone: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    require: true,
  }
});

const Users = mongoose.model('Users', LoginSchema);

module.exports = Users;
