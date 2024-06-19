const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    uname: String,
    pword: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;