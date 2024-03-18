const { OPTIONS, generateURl } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const Passbook = sequelize.define(
    'Passbook',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // customerId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'Customer',
      //     key: 'id',
      //   },
      // },
      type: {
        type: DataTypes.ENUM(
          OPTIONS.paymentType.ADVANCE,
          OPTIONS.paymentType.DEPOSIT
        ),
        allowNull: false,
      },
      particular: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      paid: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      currentBalance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
    },
    {
      tableName: 'Passbook',
      timestamps: true,
    }
  );
  Passbook.associate = (models) => {
    Passbook.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      as: 'customer',
      onDelete: 'CASCADE',
    });
  };
  return Passbook;
};
