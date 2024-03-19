const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { verifyFields } = require('../validations/verifyFields');
const { userSchema } = require('../validations/schemas')
const { cpf } = require('cpf-cnpj-validator');
const { parse } = require('telefone');

const validateUser = (req, res, next) => {
  const user = req.body;
  const requiredFields = ['name', 'email', 'telephone', 'cpf', 'status'];

  const areAllFieldsPresent = verifyFields(requiredFields, user);
  if (!areAllFieldsPresent) {
    const errorMessage = 'Some required fields are missing';
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: errorMessage });
  }

  const { error } = userSchema.validate(user);
  if (error) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: error.message });
  }

  if (!cpf.isValid(user.cpf)) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: 'Invalid CPF' });
  }
  
  if (!parse(user.telephone)) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: 'Invalid phone number' });
  }

  next();
};

module.exports = {
  validateUser,
};
