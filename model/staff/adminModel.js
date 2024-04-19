const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

//Export the model
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin