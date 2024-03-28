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
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        set(value) {
          value ? this.setDataValue('price', value.toFixed(2)) : null
        },
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
    Variant.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'variantWithProduct',
      onDelete: 'CASCADE',
    });
  };

  
  // Variant.associate = (models) => {
  //   Variant.hasMany(models.AttrVariantMap, {
  //     foreignKey: 'variantId',
  //     as: 'variantWithAttrVariantMap',
  //     onDelete: 'CASCADE',
  //   });
  // };

  return Variant;
};
