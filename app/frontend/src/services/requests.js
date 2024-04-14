import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const errorMessages = {
  '"name" length must be at least 8 characters long': 'O nome deve ter pelo menos 8 caracteres.',
  '"cpf" length must be at least 11 characters long': 'O CPF deve ter 11 caracteres.',
  '"telephone" length must be at least 11 characters long': 'O número de telefone deve ter 11 caracteres.',
  'Invalid CPF': 'CPF inválido.',
  'Invalid phone number':'O número de telefone é inválido.',
  '"status" must be one of [ativo, inativo, aguardando_ativacao, desativado]': 'Defina um status: Ativo, Inativo, Aguardando ativação ou Desativado.',
  'User already registered with this E-mail': 'Este e-mail já está registrado.',
};

export const requestClients = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter usuários:', error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      const errorMessage = error.response.data.message;
      throw new Error(`Erro ao criar usuário! ${errorMessages[errorMessage] || errorMessage}`);
    } else {
      throw new Error('Erro ao criar usuário:', error);
    }
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      const errorMessage = error.response.data.message;
      throw new Error(`Erro ao atualizar usuário! ${errorMessages[errorMessage] || errorMessage}`);
    } else {
      throw new Error('Erro ao atualizar usuário:', error);
    }
  }
};
