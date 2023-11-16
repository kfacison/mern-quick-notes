const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: User
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Note', noteSchema);