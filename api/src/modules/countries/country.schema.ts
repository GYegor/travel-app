import mongoose = require('mongoose');

const VotedUsersSchema = new mongoose.Schema({
    _id: false,
    userId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    imageId: String,
    points: {
        type: Number,
        required: true,
    },
});

const RatingSchema = new mongoose.Schema({
    _id: false,
    points: Number,
    votes: Number,
    votedUsers: [VotedUsersSchema],
});

const localeSchema = new mongoose.Schema({
    _id: false,
    name: String,
    capital: String,
    description: String,
});

const SightSchema = new mongoose.Schema({
    _id: false,
    sightId: {
        type: Number,
        required: true,
    },
    smallImageId: String,
    imageId: String,
    rating: [RatingSchema],
    localizations: [localeSchema],
});

const CountrySchema = new mongoose.Schema({
    countryId: {
        type: Number,
        required: true,
    },
    imageId: String,
    smallImageId: String,
    videoUrl: String,
    coordinates: {
        type: String,
        required: true,
    },
    sights: {
        type: [SightSchema],
        required: true,
    },
    localizations: [localeSchema],
    },
    {
    versionKey: false
    }
);

export = CountrySchema;

// const { Schema, model } = require('mongoose');

// const localeSchema = new Schema({
//   _id: false,
//   name: {
//     type: String,
//     required: true,
//   },
//   capital: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// const countrySchema = new Schema({
//   imageId: String,
//   videoUrl: String,
//   currency: {
//     type: String,
//     required: true,
//   },
//   ISOCode: {
//     type: String,
//     uppercase: true,
//     unique: true,
//     required: true,
//   },
//   capitalLocation: {
//     type: {
//       type: String,
//       enum: ['Point'],
//       required: true,
//     },
//     coordinates: {
//       type: [Number],
//       required: true,
//     },
//   },
//   localizations: [localeSchema],
// });

// const Country = model('Country', countrySchema);

// module.exports = Country;
