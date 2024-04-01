const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      
    },
    {
      timestamps: true,
      tableName: "Order",
    }
  );

  Order.associate = (models) => {

    Order.belongsTo(models.Address, {
      foreignKey: 'addressId',
      as: 'orderWithAddress',
      // onDelete: 'CASCADE',
    });

    Order.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      as: 'orderWithCustomer',
      // onDelete: 'CASCADE',
    });


    Order.hasMany(models.OrderVariantMap, {
      foreignKey: 'orderId',
      as: 'orderWithOrderVariantMap',
      // onDelete: 'CASCADE',
    });
  };
  return Order;
};
