const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
    },

    verified: false,

})

const User = mongoose.model('user', UserSchema);
module.exports = User;