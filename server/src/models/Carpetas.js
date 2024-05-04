const { DataTypes } = require('sequelize');

const Carpetas = (sequelize) => {
  sequelize.define(
    'Carpetas',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, paranoid: true }
  );
};

module.exports = Carpetas;
