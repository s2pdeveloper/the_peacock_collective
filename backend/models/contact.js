const { ENUM } = require("sequelize");
const { OPTIONS } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
     
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status:{
        type:DataTypes.STRING,
        allowNull:true,
       defaultValue:OPTIONS.messageStatus.ACTIVE,
        enum:OPTIONS.messageStatus.getAllMessageStatus()
      }
    },
    {
      timestamps: true,
      tableName: "Contact",
    }
  );
  return Contact;
};
