const { OPTIONS, generateURl } = require("../config/options/global.options");
const { options } = require("../controllers/v1");

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
      status: {
        type: DataTypes.ENUM(
          OPTIONS.defaultStatus.ACTIVE,
          OPTIONS.defaultStatus.INACTIVE,
          OPTIONS.defaultStatus.APPROVED,
          OPTIONS.defaultStatus.DISPATACHED,
          
        ),
        allowNull: false,
        defaultValue: OPTIONS.defaultStatus.ACTIVE,
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
      as: 'address',
      // onDelete: 'CASCADE',
    });

    Order.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      as: 'customer',
      // onDelete: 'CASCADE',
    });

    Order.hasMany(models.OrderVariantMap, {
      foreignKey: 'orderId',
      as: 'orderWithOrderVariantMap',
      // onDelete:'CASCADE',
    });
  };
  return Order;
};
