const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const ProdTagMap = sequelize.define(
    "ProdTagMap",
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
      collection: "ProdTagMap",
    }
  );
  ProdTagMap.associate = (models) => {
    ProdTagMap.belongsTo(models.Tag, {
      foreignKey: 'tagId',
      as: 'ProdTagMapWithTag',
      onDelete: 'CASCADE',
    });
   
  };

  return ProdTagMap;
};
