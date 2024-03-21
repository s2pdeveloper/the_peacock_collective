const { OPTIONS, generateURl } = require("../config/options/global.options");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hsn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gst: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    inStock: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    isTrending: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    cod: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    inSale: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    salePrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    returnableDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    soldIndividually: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    bannerImage: {
      type: DataTypes.STRING(1324),
      allowNull: true,
      get() {
        if (this.getDataValue("bannerImage"))
          return generateURl(this.getDataValue("bannerImage"));
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: OPTIONS.defaultStatus.ACTIVE,
    },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Categories, {
      foreignKey: 'categoryId',
      as: 'productWithCategory',
      onDelete: 'CASCADE',
    });
    Product.hasMany(models.ProductImage, {
      foreignKey: 'productId',
      as: 'productImages',
      onDelete: 'CASCADE',
    });
  };
  Product.associate = (models) => {
    Product.hasMany(models.Variant, {
      foreignKey: 'productId',
      as: 'productWithVariants',
      onDelete: 'CASCADE',
    });
    Product.hasMany(models.ProdAttributeMap, {
      foreignKey: 'productId',
      as: 'productWithProdAttributeMap',
      onDelete: 'CASCADE',
    });
  };
  return Product;
};
