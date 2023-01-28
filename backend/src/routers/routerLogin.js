const { controllerLogin } = require('../controllers/controllerLogin');
const express = require('express');

const routerLogin = express.Router();

routerLogin.post('/', controllerLogin.login);

module.exports = { routerLogin };
