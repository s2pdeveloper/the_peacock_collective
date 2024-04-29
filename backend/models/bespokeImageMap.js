const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const BespokeImageMap = sequelize.define(
    "BespokeImageMap",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
       image: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
          if (this.getDataValue('image'))
            return generateURl(`${this.getDataValue('image')}`);
        },
      },
    },
    {
      timestamps: true,
      collection: "BespokeImageMap",
    }
  );

  return BespokeImageMap;
};
