const mongoose = require("mongoose");

const cafeSchema = mongoose.Schema({
    name : {type: String, require: true},
    email : {type: String, unique: true},
    password: {type: String, require: true},
    address: {type: String, require: true},
    up_time: {type: TimeRanges},
    menu: ({
        items: {type: String},
    })
})

const Cafe = mongoose.model("Cafe",cafeSchema);

module.exports = {Cafe: Cafe};