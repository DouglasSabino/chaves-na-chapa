const Users = require('../models/Users');

const servicesLogin = {
  login: async (body) => {
    const { celphone } = body;
    const [users] = await Users.find({ celphone });
    return users;
  },
};

module.exports = { servicesLogin };
