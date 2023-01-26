const Joi = require('joi');
const { httpstatuscode } = require('../utils/httpstatuscode');

const knowErros = {};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err, _req, res, _next) => {
  if (Joi.isError(err)) {
    const [code, message] = err.message.split('|')
    return res.status(Number(code)).json({ message: `${message}` });
  }

  const error = knowErros[err];
  if (error) return res.status(Number(error.code)).json({ message: `${error.message}` });
  return res.status(httpstatuscode.INTERNAL_SERVER).json({ message: "Internal Server Error" });
}

module.exports = { middlewareError };