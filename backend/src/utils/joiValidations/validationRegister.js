const { httpstatuscode } = require('../httpstatuscode');
const Joi = require('joi');

const schemaRegister = {
  validationRegister: async (body) => {
    const schema = Joi.object({
      celphone: Joi.string().min(8).max(9).required().pattern(/^[0-9]+$/).messages({
        "string.min": `${httpstatuscode.BAD_REQUEST}|Por Favor Insira um telefone em um formato valido`,
        "string.max": `${httpstatuscode.BAD_REQUEST}|Por Favor Insira um telefone em um formato valido`,
        "string.empty": `${httpstatuscode.BAD_REQUEST}|Por Favor Digite seu Telefone`,
        "string.pattern.base": `${httpstatuscode.BAD_REQUEST}|Por Favor Insira um telefone em um formato valido`
      }),
      name: Joi.string().min(3).required().messages({
        "string.min": `${httpstatuscode.BAD_REQUEST}|O Nome do usuario precisa ter pelo menos 3 letras`,
        "string.empty": `${httpstatuscode.BAD_REQUEST}|Por favor digite seu nome`,
      })
    });
    await schema.validateAsync(body);
  },
}

module.exports = { schemaRegister }