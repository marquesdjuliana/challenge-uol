module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    telephone: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    cpf: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('ativo', 'inativo', 'aguardando_ativacao', 'desativado'),
      defaultValue: 'aguardando_ativacao',
    },
  }, {
    timestamps: true,
    tableName: 'users', 
    underscored: false,
  });

  return User;
};
