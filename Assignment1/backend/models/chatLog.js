const mongoose = require("mongoose");

const chatLogSchema = mongoose.Schema({
    room: String,
    messages: [{
        date: Date,
        user: String,
        message: String
    }]
});

module.exports = mongoose.model("ChatLog", chatLogSchema);