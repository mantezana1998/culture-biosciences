const mongoose = require('mongoose');

const foamOrNot = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const foamSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    date: String,
    foamOrNot: [foamOrNot]
})

module.exports = mongoose.model("Foam", foamSchema)