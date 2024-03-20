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
      // name: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // value: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
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
  // Variant.associate = (models) => {
  //   Variant.belongsTo(models.Attribute, {
  //     foreignKey: 'attrNameId',
  //     as: 'variantWithAttrName',
  //     onDelete: 'CASCADE',
  //   });
  // };
  // Variant.associate = (models) => {
  //   Variant.belongsTo(models.Attribute, {
  //     foreignKey: 'attrValueId',
  //     as: 'variantWithAttrValue',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return Variant;
};
