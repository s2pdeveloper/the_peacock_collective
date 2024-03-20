const { OPTIONS, generateURl } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define(
    'ProductImage',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING(1324),
        allowNull: true,
        get() {
          if (this.getDataValue('image'))
            return generateURl(`images/${this.getDataValue('image')}`);
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
      tableName: 'ProductImage',
      timestamps: true,
    }
  );
  return ProductImage;
};
