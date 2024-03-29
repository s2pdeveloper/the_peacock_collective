const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const variantMapOrder = sequelize.define(
    "variantMapOrder",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },   
    //   variantId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price:{
       type:DataTypes.INTEGER,
       allowNull:true,
      },
      qty:
       {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

    },
    {
      timestamps: true,
      collection: "VariantMapOrder",
    }
  );

  variantMapOrder.associate = (models) => {
    Variant.hasMany(models.Variant, {
      foreignKey: 'variantId',
      as: 'variant',
      onDelete: 'CASCADE',
    });

  return variantMapOrder;
}

};
