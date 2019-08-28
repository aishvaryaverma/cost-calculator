const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    mobile: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    data: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mobile = mongoose.model('howmuchtomakeanapps', UserSchema);