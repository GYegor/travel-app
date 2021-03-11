import mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String,
    photo: String,
    token: String,
    },
    {
    versionKey: false
    }
);

export = UserSchema;