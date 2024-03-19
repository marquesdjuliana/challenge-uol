const route = require('express').Router();
const {userController} = require('../controllers');
const { validateUser } = require('../middlewares/validateFields');


route.get('/', userController.listAllUsers);
route.post('/', validateUser, userController.createUser);
route.put('/:id', validateUser, userController.updateUser);

module.exports = route;