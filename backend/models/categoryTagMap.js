const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const CategoryTagMap = sequelize.define(
    "CategoryTagMap",
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
      collection: "CategoryTagMap",
    }
  );
  CategoryTagMap.associate = (models) => {
    CategoryTagMap.belongsTo(models.Tag, {
      foreignKey: 'tagId',
      as: 'CategoryTagMapWithTag',
      onDelete: 'CASCADE',
    });

  };

  return CategoryTagMap;
};
