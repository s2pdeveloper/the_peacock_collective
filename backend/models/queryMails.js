const { ENUM } = require("sequelize");
const { OPTIONS } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const QueryMail = sequelize.define(
    "QueryMail",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "QueryMail",
    }
  );
  QueryMail.associate = (models) => {
    QueryMail.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      as: 'queryMailsWithCustomer',
       onDelete: 'CASCADE',
    });
  };
  return QueryMail;
};
