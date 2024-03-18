const { OPTIONS, generateURl } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const ShopNotification = sequelize.define(
    'ShopNotification',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // userId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'User',
      //     key: 'id',
      //   },
      // },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  ShopNotification.associate = (models) => {
    ShopNotification.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'studentNotification',
      onDelete: 'CASCADE',
      constrains: false,
    });
    models.User.hasOne(ShopNotification, {
      foreignKey: 'userId',
      as: 'studentNotification',
      onDelete: 'CASCADE',
      constrains: false,
    });
  };
  return ShopNotification;
};
