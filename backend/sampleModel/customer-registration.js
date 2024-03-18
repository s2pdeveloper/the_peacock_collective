const mongoose = require("mongoose");
const { defaultStatus } = require("../config/Options");

const customerregistrationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    tagId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "tag",
    },
    createdBy: {
      type: String,
      required: false,
    },
    modifiedBy: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
      enum: defaultStatus.getAllStatusAsArray(),
      default: defaultStatus.ACTIVE,
    },
  },
  {
    timestamps: true,
    collection: "CustomerRegistration",
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);

customerregistrationSchema.index({ "$**": "text" });

// customerregistrationSchema.virtual('email').get(function () {
//     return `${this.name ?? ''} ${this.email ?? ''}`;
//   });
  
//   customerregistrationSchema.methods.isPasswordMatch = async function (password) {
//     const user = this;
//     return bcrypt.compare(password, user.password);
//   };
  
//   customerregistrationSchema.methods.genToken = function () {
//     const payload = { id: this._id };
//     return jwt.sign(payload, jwtOptions.secretOrKey, {
//       expiresIn: jwtOptions.expiry,
//     });
//   };
//   customerregistrationSchema.pre('save', async function (next) {
//     const user = this;
//     if (user.isModified('password')) {
//       user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync(8));
//     }
//     next();
//   });
  
const CustomerRegistration = mongoose.model("CustomerRegistration", customerregistrationSchema);

exports.CustomerRegistration = CustomerRegistration;
