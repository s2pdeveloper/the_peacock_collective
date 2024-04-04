const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const WishList = sequelize.define(
    "WishList",
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
      tableName: "WishList",
    }
  );

  WishList.associate = (models) => {
    WishList.belongsTo(models.Variant, {
      foreignKey: 'variantId',
      as: 'variantWithWishList',
      onDelete: 'CASCADE',
    });
  };

  return WishList;
};
