const { servicesUser } = require('../services/servicesUser');
const { httpstatuscode } = require('../utils/httpstatuscode');
const { schemaRegister } = require('../utils/joiValidations/validationRegister');

const controllerUser = {
  register: async (req, res, next) => {
    try {
      await schemaRegister.validationRegister(req.body);
      await servicesUser.register(req.body);
      return res.status(httpstatuscode.OK).json({message: "new user created"});
    } catch (err) {
      next(err);
    }
  },
};

module.exports = { controllerUser }