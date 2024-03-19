'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'João Silva',
        email: 'joao@example.com',
        telephone: '11987654321',
        cpf: '12345678910',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria Santos',
        email: 'maria@example.com',
        telephone: '11912345678',
        cpf: '10987654321',
        status: 'inativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pedro Souza',
        email: 'pedro@example.com',
        telephone: '1133333333',
        cpf: '10987654322',
        status: 'aguardando_ativacao',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ana Oliveira',
        email: 'ana@example.com',
        telephone: '11944444444',
        cpf: '10987654323',
        status: 'desativado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carlos Pereira',
        email: 'carlos@example.com',
        telephone: '11955555555',
        cpf: '10987654324',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
