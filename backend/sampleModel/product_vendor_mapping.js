const mongoose = require("mongoose");


const product_vendor_mappingSchema = mongoose.Schema(
    {



        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Product",
        },
        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Vendor",
        },


    },
    {
        timestamps: true,
        collection: "Product_vendor_mapping",
    }
);
product_vendor_mappingSchema.index({ "$**": "text" });


const Product_vendor_mapping = mongoose.model("Product_vendor_mapping", product_vendor_mappingSchema);

module.exports = Product_vendor_mapping;