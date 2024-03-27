const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: OPTIONS.defaultStatus.ACTIVE,
      },
      image: {
        type: DataTypes.STRING(1324),
        allowNull: true,
        get() {
          if (this.getDataValue("image"))
            return generateURl(this.getDataValue("image"));
        },
      },
    },
    {
      timestamps: true,
      tableName: "Categories",
    }
  );

  Categories.associate = (models) => {
    Categories.hasMany(models.Categories, {
      foreignKey: "parentId",
      as: "subcatagories",
    });
    Categories.belongsTo(models.Categories, {
      foreignKey: "parentId",
      as: "categories",
    });
  };
  return Categories;

};
