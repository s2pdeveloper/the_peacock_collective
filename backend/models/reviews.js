const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "Review",
    }
  );

  Review.associate = (models) => {
    Review.belongsTo(models.Customer, {
      foreignKey: "customerId",
      as: "reviewsWithCustomer",
      onDelete: 'CASCADE',
    });
  };
  // return Review;

};
