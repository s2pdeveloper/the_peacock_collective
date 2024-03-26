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
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
   
    },
    {
      timestamps: true,
      tableName: "Cart",
    }
  );

  Cart.associate = (models) => {
    Cart.belongsTo(models.Variant, {
      foreignKey: 'variantId',
      as: 'variant',
      onDelete: 'CASCADE',
    });
  };
  return Cart;
};
