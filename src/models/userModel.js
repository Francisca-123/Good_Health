const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    firstname:{
        type: String,
        required: true
    },

    lastname: {
        type : String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique:true,
        trim: true,
        lowercase:true
    },
    password:{
        type: String,
        required:true
    },
    telephone:{
        type: String,
        required: [true, "Telephone is required"],
    },
    address:{
        type: String
    }
},
{timestamps: true} 
)

const userModel = mongoose.model('user', userSchema)

module.exports = userModel