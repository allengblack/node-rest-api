const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Ninja module on schema
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in Geolocation
});

const Ninja = mongoose.Model('ninja', NinjaSchema);

module.exports = Ninja;