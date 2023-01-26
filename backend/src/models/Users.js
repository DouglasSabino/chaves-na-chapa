const mongoose = require('mongoose');

const Users = mongoose.model('users', {
  celphone: String,
  name: String
})

module.exports = Users;