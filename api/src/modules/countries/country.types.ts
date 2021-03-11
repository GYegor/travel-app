import mongoose = require('mongoose');

export enum Language {
    en = 1,
    ru = 2,
    by = 3
}

export interface IUser {
    userId: number;
    name: string;
    imageUrl: string;
}

export interface IVotedUser extends IUser {
    points: number;
}

export interface IRating {
    points: number;
    votes: number;
    votedUsers: Array<IVotedUser>;
}

export interface ISight {
    sightId: number;
    imageUrl: string;
    name: string;
    description: string;
    rating?: IRating;
}

export interface ICountryBase {
    countryId: number;
    name: string;
    capital: string;
    smallImageUrl?: string;
}

export interface ICountry extends ICountryBase {
    imageUrl: string;
    videoUrl: string;
    description: string;
    coordinates: string;
    sights: Array<ISight>;
}

interface IVotedUserSchema {
    userId: number;
    name: string;
    imageUrl: string;
    points: number;
}

interface IRatingSchema {
    points: number;
    votes: number;
    votedUsers: Array<IVotedUserSchema>;
}
interface ILocaleSchema {
    name: string,
    capital?: string,
    description: string,
}
export interface ISightSchema {
    sightId: number;
    imageUrl: string;
    rating?: IRatingSchema;
    localizations: Array<ILocaleSchema>;
}

export interface ICountrySchema {
    countryId: number,
    imageUrl: string,
    smallImageUrl: string,
    videoUrl: string,
    coordinates: string,
    sights: Array<ISightSchema>,
    localizations: Array<ILocaleSchema>,
}

export interface ICountryDocument extends ICountrySchema, mongoose.Document {}

export interface ICountryModel extends mongoose.Model<ICountryDocument> {}