const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const UserDevice = sequelize.define(
    "UserDevice",
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
      receiveNotification: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      deviceId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      uuId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      appVersion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      osVersion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      operatingSystem: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      geoLocation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phoneVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  UserDevice.associate = (models) => {
    UserDevice.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
      constrains: false,
    });
    models.User.hasOne(UserDevice, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
      constrains: false,
    });
  };
  return UserDevice;
};
