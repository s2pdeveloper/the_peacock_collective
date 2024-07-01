const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define(
    "Transactions",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      transId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: OPTIONS.transactionsType.STRIPE,
        enum: [OPTIONS.transactionsType.STRIPE],
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "Transactions",
    }
  );

  return Transactions;
};
