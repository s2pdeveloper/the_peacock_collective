const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');


const reviewSchema = mongoose.Schema(
    {
        published :{
            type: Boolean,
            required: false,
            default:0
        },
        isDelete:{
                type: Boolean,
                required: false,
                default:0
            },
        userId :{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User",
            },
        productId :{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Product",
            },
        head :{
                type:String,
                required:true,
            },
        description :{
            type:String,
            required:true,
        },
        star :{
            type:Number,
            required:true,
        },
        status: {
            type: String,
            required: false,
            enum: defaultStatus.getAllStatusAsArray(),
            default: defaultStatus.ACTIVE,
          },
      
        createdBy : {
                type: String,
                required: false,
            },
       
        modifiedBy : {
                type: String,
                required: false,
            },
    },
    {
        timestamps: true,
        collection: "Review",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
reviewSchema.index({ "$**": "text" });


const Review = mongoose.model("Review", reviewSchema);

exports.Review = Review;