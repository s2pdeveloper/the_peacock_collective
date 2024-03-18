const mongoose = require("mongoose");


const product_groupSchema = mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Product",
        },
        product2Id: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Product",
        },
    },
    {
        timestamps: true,
        collection: "Product_group",
    }
);
product_groupSchema.index({ "$**": "text" });


const Product_group = mongoose.model("Product_group", product_groupSchema);

module.exports = Product_group;