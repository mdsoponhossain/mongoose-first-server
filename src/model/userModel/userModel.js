const mongoose = require('mongoose');
const userSchema = require('../../schemas/userSchema/userSchema');
const userModel = new mongoose.model('UserCollection',userSchema);
module.exports = userModel ;