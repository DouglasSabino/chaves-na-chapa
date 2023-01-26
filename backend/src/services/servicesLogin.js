const Users = require('../models/Users');

const servicesLogin = {
  login: async (body) => {
    const { celphone } = body;
    console.log(celphone);
    const [users] = await Users.find({ celphone });
    console.log(users);
    return users;
  },
};

module.exports = { servicesLogin };
