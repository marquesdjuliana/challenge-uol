const { User } = require('../models');

const listAllUsers = async () => {
  const users = await User.findAll();
  return { status: 'SUCCESSFUL', data: users };
};

const createUser = async (newUserDetails) => {
  const existingUserByEmail = await User.findOne({ where: { email: newUserDetails.email } });
  const existingUserByCPF = await User.findOne({ where: { cpf: newUserDetails.cpf } });
  
  if (existingUserByEmail) {
    return { status: 'CONFLICT', data: { message: 'User already registered with this E-mail' } };
  }

  if (existingUserByCPF) {
    return { status: 'CONFLICT', data: { message: 'User already registered with this CPF' } };
  }

  const newUser = await User.create(newUserDetails);

  if (newUser) {
    return { status: 'CREATED', data: newUser };
  }
};

const updateUser = async (id, updatedUserInfo) => {
  const existingUser = await User.findByPk(id);

  if (!existingUser) {
    return { status: 'NOT_FOUND', data: { message: 'User not found' } };
  }

  try {
    await existingUser.update(updatedUserInfo);
    return { status: 'SUCCESSFUL', data: { message: 'User updated successfully' } };
  } catch (error) {
    return { status: 'BAD_REQUEST', data: { message: 'Failed to update user information' } };
  }
};

module.exports = {
  listAllUsers,
  createUser,
  updateUser
};
