const { controllerUser } = require('../controllers/controllerUser');
const express = require('express');

const routerUser = express.Router();

routerUser.post('/register', controllerUser.register);

module.exports = { routerUser };