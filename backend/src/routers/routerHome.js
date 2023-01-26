const express = require('express');

const routerHome = express.Router();

routerHome.get('/', (_req, res) => {
  return res.status(200).json('Rota OK');    
})

module.exports= { routerHome };
