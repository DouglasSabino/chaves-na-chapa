const { controllerLogin } = require('../controllers/controllerLogin');
const express = require('express');

const routerLogin = express.Router();

routerLogin.get('/', controllerLogin.login);

module.exports = { routerLogin };
