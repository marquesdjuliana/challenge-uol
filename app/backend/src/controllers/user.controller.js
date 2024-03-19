const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
 
const listAllUsers = async (_req, res) => {
  const { status, data } = await userService.listAllUsers();
  return res.status(mapStatusHTTP(status)).json(data);
};

const createUser = async (req, res) => {
  const { body } = req;
  const { status, data } = await userService.createUser(body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { status, data } = await userService.updateUser(id, body);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  listAllUsers,
  createUser,
  updateUser,
}