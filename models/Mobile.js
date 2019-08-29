const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    stepsData: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mobile = mongoose.model('howmuchtomakeanapps', UserSchema);