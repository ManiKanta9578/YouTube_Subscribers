const mongoose = require("mongoose");
//schema
const Schema = mongoose.Schema
//subscriber schema
const subscriberSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    subscribedChannel : {
        type : String,
        require : true
    },
    subscribedDate : {
        type : Date,
        require :true,
        default : Date.now
    }
});

module.exports = mongoose.model("Subscriber", subscriberSchema);