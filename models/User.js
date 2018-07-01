const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id: String,
    token: String,
    displayName: String,
    username: String,
    profile_image: String,
})

const User = mongoose.model("User", userSchema, "users")

module.exports = User