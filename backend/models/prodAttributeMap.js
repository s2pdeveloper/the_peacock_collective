const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const ProdAttributeMap = sequelize.define(
    "ProdAttributeMap",
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
      collection: "ProdAttributeMap",
    }
  );
  ProdAttributeMap.associate = (models) => {
    ProdAttributeMap.belongsTo(models.Attribute, {
      foreignKey: 'attributeId',
      as: 'ProdAttributeMapWithAttributes',
      onDelete: 'CASCADE',
    });
  };
  // ProdAttributeMap.associate = (models) => {
  //   ProdAttributeMap.belongsToMany(models.Product, {
  //     foreignKey: 'productId',
  //     as: 'ProdAttributeMapWithProducts',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return ProdAttributeMap;
};
