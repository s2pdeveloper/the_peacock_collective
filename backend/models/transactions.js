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
        set(value) {
          value ? this.setDataValue('amount', +value.toFixed(2)) : null
        },
      },
    },
    {
      timestamps: true,
      tableName: "Transactions",
    }
  );
  Transactions.associate = (models) => {
    Transactions.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      as: 'transactionWithCustomer',
       onDelete: 'CASCADE',
    });
  };

  return Transactions;
};
