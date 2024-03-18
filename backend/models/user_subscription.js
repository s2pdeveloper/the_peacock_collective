const { OPTIONS } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const UserSubscription = sequelize.define(
    'UserSubscription',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: OPTIONS.defaultStatus.ACTIVE,
      },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      validTill: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      isPaid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        get() {
          return parseFloat(this.getDataValue('amount'));
        },
      },
      discountPercentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        get() {
          return parseFloat(this.getDataValue('totalAmount'));
        },
      },
      planFeatures: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
          return this.getDataValue('planFeatures')
            ? JSON.parse(this.getDataValue('planFeatures'))
            : null;
        },
        set(val) {
          this.setDataValue('planFeatures', JSON.stringify(val));
        },
      },
      razorpaySubscriptionId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      additionalDetails: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
          return this.getDataValue('additionalDetails')
            ? JSON.parse(this.getDataValue('additionalDetails'))
            : null;
        },
        set(val) {
          this.setDataValue('additionalDetails', JSON.stringify(val));
        },
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  UserSubscription.associate = (models) => {
    UserSubscription.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
    UserSubscription.belongsTo(models.Subscription, {
      foreignKey: 'subscriptionId',
      as: 'subscription',
      onDelete: 'CASCADE',
    });
  };

  return UserSubscription;
};
