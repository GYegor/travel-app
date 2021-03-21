"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
exports.UserModel = mongoose.model("User", UserSchema);
