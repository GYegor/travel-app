"use strict";
// module.exports = {
//   DEFAULT_LANG: 'en',
//   DEV_PORT: 3000,
//   MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
// };
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
    path: path.join(__dirname, '../../.env')
});
module.exports = {
    DEFAULT_LANG: 'en',
    DEV_PORT: process.env.PORT,
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    // NODE_ENV: process.env.NODE_ENV,
    // JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    // DEFAULT_SALT_ROUNDS: process.env.DEFAULT_SALT_ROUNDS,
    // AUTH_MODE: process.env.AUTH_MODE === 'true'
};
