const mongoose = require("mongoose");
 

const roleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
        },
        isDelete: {
            type: Boolean,
            required: false,
            default:0
        },
        createdBy: {
            type: String,
            required: false,
        },
        modifiedBy: {
            type: String,
            required: false,
        },
        description:{
            type: String,
            required:false
            
        }        
        
    },
    {
        timestamps: true,
        collection: "Role",
    }
);
roleSchema.index({"$**": "text"});

 
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;