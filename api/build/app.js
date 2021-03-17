"use strict";
require('dotenv').config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const http_status_codes_1 = require("http-status-codes");
const errorMiddleware = require("./middleware/error-middleware");
const requestLogMiddleware = require("./middleware/request-logger");
const countryRouter = require("./modules/countries/country.router");
const userRouter = require("./modules/users/user.router");
const app = express();
app.use(cors());
app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
app.use(express.json());
app.use(requestLogMiddleware);
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.use('/favicon.ico', (req, res) => res.sendStatus(http_status_codes_1.StatusCodes.NO_CONTENT));
// Routers
app.use('/api/countries', countryRouter);
app.use('/api/users', userRouter);
app.use(errorMiddleware);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});
module.exports = app;
