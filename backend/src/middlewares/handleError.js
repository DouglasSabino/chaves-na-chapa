const Joi = require('joi');
const { httpstatuscode } = require('../utils/httpstatuscode');

const knowErros = {
  NO_PHOTO: { code: httpstatuscode.BAD_REQUEST, message: "Por Favor, Insira Uma imagem" }
};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err, _req, res, _next) => {
  if (Joi.isError(err)) {
    const [code, message] = err.message.split('|')
    return res.status(Number(code)).json({ message: `${message}` });
  }

  const error = knowErros[err];
  if (error) return res.status(Number(error.code)).json({ message: `${error.message}` });
  return res.status(httpstatuscode.INTERNAL_SERVER).json({ message: err });
}

module.exports = { middlewareError };