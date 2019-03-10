mongoose = require("mongoose");

const eventLogSchema = ({
    date: Date,
    user: String,
    event: String,
});

module.exports = mongoose.model("EventLog", eventLogSchema);