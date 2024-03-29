const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define(
    "Attribute",
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
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "text",
        enum: ["text", "number", "color"],
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue('value', JSON.stringify(value));
        },
        get() {
          const value = this.getDataValue('value');
          return value ? JSON.parse(value) : null;
        }
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: OPTIONS.defaultStatus.ACTIVE,
      },
    },
    {
      timestamps: true,
      collection: "Attribute",
    }
  );
  return Attribute;
};
