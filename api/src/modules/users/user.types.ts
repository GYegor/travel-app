import mongoose = require('mongoose');

export interface IUser {
    name: String,
    login: String,
    password: String,
    photo: String,
    token: String,
}

export interface IUserDocument extends IUser, mongoose.Document {}

export interface IUserModel extends mongoose.Model<IUserDocument> {}