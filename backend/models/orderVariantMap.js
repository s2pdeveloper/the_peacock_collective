const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const OrderVariantMap = sequelize.define(
    "OrderVariantMap",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      //   variantId: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //   },
      // orderId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },

      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      collection: "OrderVariantMap",
    }
  );

  OrderVariantMap.associate = (models) => {
    OrderVariantMap.belongsTo(models.Variant, {
      foreignKey: "variantId",
      as: "orderVariantMapWithVariant",
      // onDelete: "CASCADE",
    });
  };

  return OrderVariantMap;
};
