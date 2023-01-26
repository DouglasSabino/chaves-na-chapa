const { servicesLogin } = require('../services/servicesLogin');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllerLogin = {
  login: async (req, res, next) => {
    try {
      const user = await servicesLogin.login(req.body);
      return res.status(httpstatuscode.OK).json({message: user});
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};

module.exports = { controllerLogin }
