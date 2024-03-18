const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');
 

const productOptionSchema = mongoose.Schema(
    {
    productId :{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Product",
        },
	published:{
        type: Boolean,
        required: false,
        default:0
    }, 
	isDelete:{
            type: Boolean,
            required: false,
            default:0
        },
	SKU :{
            type:String,
            required:true,
        },
	quantity:{
        type:Number,
        required:true,
    },
	cost:{
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
        collection: "productOption",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
productOptionSchema.index({"$**": "text"});

 
const productOption = mongoose.model("productOption", productOptionSchema);

exports.productOption = productOption;