const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, requied: true, unique: true },
        password: { type: String, requied: true },
        isAdmin: {
            type: Boolean,
            default: false
        }
    }, {
    timestamps: true
}
) ;

module.exports = mongoose.model('User', userSchema);