const {Schema, model} = require('mongoose');

// -- USER DATABASE MODEL --
const userSchema = new Schema(
    {
        username: String,
        email: String,
        admin: Boolean
    },

    {
         timestamps: true
    }
);

module.exports = model('user', userSchema);