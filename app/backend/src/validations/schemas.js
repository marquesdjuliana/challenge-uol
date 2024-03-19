const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  telephone: Joi.string().min(11).required(), 
  cpf: Joi.string().min(11).required(), 
  status: Joi.string().valid('ativo', 'inativo', 'aguardando_ativacao', 'desativado').required(),

});


module.exports = {
  userSchema
};