const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // socialTitle: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
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
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      phoneVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "active",
        enum: ["active", "inactive"],
      },

      lastLoginAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      resetPin: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      profileImage: {
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
  Customer.prototype.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  };
  Customer.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  Customer.prototype.genToken = function () {
    const payload = { id: this.id, role: this.role };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
  };

  Customer.associate = (models) => {
    Customer.hasMany(models.Address, {
      foreignKey: 'customerId',
      as: 'customerWithAddresses',
      // onDelete: 'CASCADE',
    });

    Customer.hasMany(models.WishList, {
      foreignKey: 'customerId',
      as: 'customerWithWishList',
       onDelete: 'CASCADE',
    });
  };
  
  return Customer;
};
