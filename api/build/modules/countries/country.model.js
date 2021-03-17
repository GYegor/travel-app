"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModel = void 0;
const mongoose = require("mongoose");
const CountrySchema = require("./country.schema");
exports.CountryModel = mongoose.model("Country", CountrySchema);
