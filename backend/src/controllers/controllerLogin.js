const { servicesLogin } = require('../services/servicesLogin');
const { httpstatuscode } = require('../utils/httpstatuscode');
const { schemaLogin } = require('../utils/joiValidations/validationLogin');

const controllerLogin = {
  login: async (req, res, next) => {
    try {
      await schemaLogin.validationLogin(req.body);
      const user = await servicesLogin.login(req.body);
      return res.status(httpstatuscode.OK).json({message: user});
    } catch (err) {
      next(err);
    }
  },
};

module.exports = { controllerLogin }
