const { OPTIONS, generateURl } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const Bespoke = sequelize.define(
    'Bespoke',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      toDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      eventOutfit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jewelryOption: {
        type: DataTypes.ENUM(
          OPTIONS.jewelryOption.YES,
          OPTIONS.jewelryOption.NO,
        ),
        allowNull: false,
      },
    },
    {
      tableName: 'Bespoke',
      timestamps: true,
    }
  );
  Bespoke.associate = (models) => {
    Bespoke.hasMany(models.BespokeImageMap, {
      foreignKey: "bespokeId",
      as: "bespokeImages",
      // onDelete: "CASCADE",
    });
    Bespoke.belongsTo(models.Customer, {
      foreignKey: "customerId",
      as: "bespokeWithCustomer",
      // onDelete: "CASCADE",
    });
  };
  return Bespoke;
};
