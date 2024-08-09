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
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        set(value) {
          value ? this.setDataValue('amount', +value.toFixed(2)) : null
        },
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        set(value) {
          value ? this.setDataValue('discount', +value.toFixed(2)) : null
        },
      },
      shippingFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
        set(value) {
          value ? this.setDataValue('shippingFee', +value.toFixed(2)) : null
        },
      },
      status: {
        type: DataTypes.ENUM(
          OPTIONS.defaultStatus.ACTIVE,
          OPTIONS.defaultStatus.ACCEPT,
          OPTIONS.defaultStatus.REJECTED,
          OPTIONS.defaultStatus.DISPATCHED,
          OPTIONS.defaultStatus.DELIVERED
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
      foreignKey: "addressId",
      as: "address",
      // onDelete: 'CASCADE',
    });

    Order.belongsTo(models.Customer, {
      foreignKey: "customerId",
      as: "customer",
      // onDelete: 'CASCADE',
    });

    Order.hasMany(models.OrderVariantMap, {
      foreignKey: "orderId",
      as: "orderWithOrderVariantMap",
      // onDelete:'CASCADE',
    });
  };
  return Order;
};
