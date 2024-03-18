const mongoose = require("mongoose");


const categoryimageSchema = mongoose.Schema(
    {

        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Categories",
        },
        
        imageId: {
            type: String,
            required: true,
        },
        
        createdBy: {
            type: String,
            required: false,
        },
        
        modifiedBy: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        collection: "CategoryImage",
    }
);
categoryimageSchema.index({ "$**": "text" });


const Categoryimage = mongoose.model("Categoryimage", categoryimageSchema);

module.exports = Categoryimage;