const Users = require('../models/Users');

const servicesUser = {
  register: async (body) => {
    const { celphone, name } = body;
    const newUser = { celphone, name };
    await Users.create(newUser);
  },
};

module.exports = { servicesUser };