"use strict";
const mongoose = require("mongoose");
const config = require("../config");
const logger = require("../logging/logger");
const connectToDB = () => {
    mongoose
        .connect(config.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
        .catch((err) => logger.error(err.message));
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        logger.info('Mongo connection successfully!');
    });
};
module.exports = connectToDB;
