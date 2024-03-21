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
        allowNull: false,
      },
    },
    {
      timestamps: true,
      collection: "AttrVariantMap",
    }
  );
  // AttrVariantMap.associate = (models) => {
  //   AttrVariantMap.belongsTo(models.Product, {
  //     foreignKey: 'productId',
  //     as: 'AttrVariantMapWithAttributes',
  //     onDelete: 'CASCADE',
  //   });
  // };
  // AttrVariantMap.associate = (models) => {
  //   AttrVariantMap.belongsToMany(models.Product, {
  //     foreignKey: 'productId',
  //     as: 'AttrVariantMapWithProducts',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return AttrVariantMap;
};
