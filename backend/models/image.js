const { OPTIONS, generateURl } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define(
    'Images',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(1324),
        allowNull: true,
        get() {
          if (this.getDataValue('image'))
            return generateURl(`${this.getDataValue('image')}`);
        },
      },
      status: {
        type: DataTypes.ENUM(
          OPTIONS.defaultStatus.ACTIVE,
          OPTIONS.defaultStatus.INACTIVE
        ),
        allowNull: true,
        defaultValue: OPTIONS.defaultStatus.ACTIVE,
      },
    },
    {
      tableName: 'Images',
      timestamps: true,
    }
  );
  return Images;
};
