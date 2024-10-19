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
      set(value) {
        value ? this.setDataValue('name', value.trim()) : null
      },
    },
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
    hsn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gst: {
      type: DataTypes.STRING,
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
      set(value) {
        value ? this.setDataValue('salePrice', +value.toFixed(2)) : null
      },
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
      type: DataTypes.STRING,
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
    // Product.hasMany(models.Images, {
    //   foreignKey: 'productId',
    //   as: 'productImages',
    //   onDelete: 'CASCADE',
    // });
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
    Product.hasMany(models.ProdTagMap, {
      foreignKey: 'productId',
      as: 'productWithTagMap',
      onDelete: 'CASCADE',
    });
  };
  return Product;
};
