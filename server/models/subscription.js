const { OPTIONS, generateURl } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define(
    'Subscription',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      planType: {
        type: DataTypes.ENUM(
          OPTIONS.planTypes.BASIC,
          OPTIONS.planTypes.STANDARD,
          OPTIONS.planTypes.PREMIUM
        ),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subscriptionCharges: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        get() {
          return parseFloat(this.getDataValue('subscriptionCharges'));
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
      subscriptionType: {
        type: DataTypes.ENUM(
          OPTIONS.subscriptionTypes.YEARS,
          OPTIONS.subscriptionTypes.MONTHS,
          OPTIONS.subscriptionTypes.DAYS
        ),
        allowNull: true,
      },
      validity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: OPTIONS.defaultStatus.INACTIVE,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  // GovJobPost.associate = models => {
  //     GovJobPost.belongsToMany(models.StudentDetails, {
  //         as: "govJobPostWithStudent",
  //         through: "GovAppliedJobs",
  //         foreignKey: "govJobId",
  //     });
  //     models.StudentDetails.belongsToMany(GovJobPost, {
  //         as: "studentDetailsWithGovJobPost",
  //         through: "GovAppliedJobs",
  //         foreignKey: "studentId",
  //     });
  //     // models.document_category.belongsTo(models.assets_category, {
  //     //   foreignKey: 'ASSEST'
  //     // });
  // };

  return Subscription;
};
