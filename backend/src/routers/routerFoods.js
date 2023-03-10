const { controllerFoods } = require('../controllers/controllerFoods');
const upload = require('../middlewares/middlewareImage');
const express = require('express');


const routerFoods = express.Router();

routerFoods.post('/', upload.single('imagem'), controllerFoods.resgister);

module.exports= { routerFoods };
