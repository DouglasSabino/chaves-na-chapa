const Foods = require('../models/Foods');

const servicesFoods = {
  register: async (newFood) => {
    await Foods.create(newFood);
  },
};

module.exports = { servicesFoods };
