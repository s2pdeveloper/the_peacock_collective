const { OPTIONS, generateURl } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const SubscriptionMapping = sequelize.define(
    'SubscriptionMapping',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // subscriptionId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'Subscription',
      //     key: 'id',
      //   },
      // },
      // userId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'User',
      //     key: 'id',
      //   },
      // },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      validTill: {
        type: DataTypes.DATE,
        allowNull: false,
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
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  SubscriptionMapping.associate = (models) => {
    SubscriptionMapping.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users',
      onDelete: 'CASCADE',
      constrains: false,
    });
    models.User.hasMany(SubscriptionMapping, {
      foreignKey: 'userId',
      as: 'subscriptions',
      onDelete: 'CASCADE',
      constrains: false,
    });

    SubscriptionMapping.belongsTo(models.Subscription, {
      foreignKey: 'subscriptionId',
      as: 'subscriptionDetails',
      onDelete: 'CASCADE',
      constrains: false,
    });
    models.Subscription.hasMany(SubscriptionMapping, {
      foreignKey: 'subscriptionId',
      as: 'subscriptionDetails',
      onDelete: 'CASCADE',
      constrains: false,
    });
  };

  return SubscriptionMapping;
};
