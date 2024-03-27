const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      isDelete: {
        type: DataTypes.BOOLEAN, // Corrected type
        allowNull: true,
        defaultValue: false, 
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      DOB: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      emailVerified: {
        type: DataTypes.BOOLEAN, // Corrected type
        allowNull: false,
        defaultValue: false, 
      },
      phoneVerified: {
        type: DataTypes.BOOLEAN, // Corrected type
        allowNull: false,
        defaultValue: false, 
      },

      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "active",
        enum: ["active", "inactive"],
      },
      image: {
        type: DataTypes.STRING(1324),
        allowNull: true,
        get() {
          if (this.getDataValue("image"))
            return generateURl(`customerImage/${this.getDataValue("image")}`);
        },
      },
    },
    {
      timestamps: true,
      tableName: "Customer",
    }
  );
  return Customer;
};
