const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Variant = sequelize.define(
    "Variant",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    },
    {
      timestamps: true,
      collection: "Variant",
    }
  );
  Variant.associate = (models) => {
    Variant.hasMany(models.AttrVariantMap, {
      foreignKey: 'variantId',
      as: 'variantWithAttrVariantMap',
      onDelete: 'CASCADE',
    });
  };

  return Variant;
};
