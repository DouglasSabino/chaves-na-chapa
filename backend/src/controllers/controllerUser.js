const { servicesUser } = require('../services/servicesUser');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllerUser = {
  register: async (req, res, next) => {
    try {
      await servicesUser.register(req.body);
      return res.status(httpstatuscode.OK).json({message: "new user created"});
    } catch (err) {
      next(err);
    }
  },
};

module.exports = { controllerUser }