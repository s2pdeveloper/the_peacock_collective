const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const AttrVariantMap = sequelize.define(
    "AttrVariantMap",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      collection: "AttrVariantMap",
    }
  );
  AttrVariantMap.associate = (models) => {
    AttrVariantMap.belongsTo(models.Attribute, {
      foreignKey: 'attributeId',
      as: 'AttrVariantMapWithAttributes',
      onDelete: 'CASCADE',
    });
    // AttrVariantMap.hasMany(models.AttrVariantMapMultiAttr, {
    //   foreignKey: 'AttrVariantMapId',
    //   as: 'AttrVariantMapWithMultiAttributes',
    //   onDelete: 'CASCADE',
    // });

  };
  // AttrVariantMap.associate = (models) => {
  //   AttrVariantMap.belongsToMany(models.Product, {
  //     foreignKey: 'productId',
  //     as: 'AttrVariantMapWithProducts',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return AttrVariantMap;
};
