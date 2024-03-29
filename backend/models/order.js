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
    //   addressId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
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
      onDelete: 'CASCADE',
    });
  };
  return Order;
};
