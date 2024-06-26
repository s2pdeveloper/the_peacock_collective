const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:1
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0,
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "Cart",
    }
  );

  Cart.associate = (models) => {
    Cart.belongsTo(models.Variant, {
      foreignKey: "variantId",
      as: "cartWithVariants",
      onDelete: "CASCADE",
    });
  };
  return Cart;
};
