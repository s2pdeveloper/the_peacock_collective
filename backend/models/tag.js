const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      collection: "Tag",
    }
  );
  // Tag.associate = (models) => {
  //   Tag.hasMany(models.ProdTagMap, {
  //     foreignKey: "tagId",
  //     as: "tagWithProductTagMap",
  //     onDelete: 'CASCADE',
  //   });
  // };

  return Tag;
};
