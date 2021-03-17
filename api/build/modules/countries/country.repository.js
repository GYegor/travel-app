"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAndGetRating = exports.getOneByLang = exports.getAllByLang = void 0;
const model = require("./country.model");
const getBasicData = (country, lang) => ({
    id: country.countryId,
    smallImageId: country.smallImageId,
    name: country.localizations[lang].name,
    capital: country.localizations[lang].capital,
    // utcOffset: country.utcOffset,
});
const getFullBasicData = (country) => ({
    id: country.countryId,
    imageId: country.imageId,
    videoUrl: country.videoUrl,
    coords: country.coords,
    utcOffset: country.utcOffset,
    currencyCode: country.currencyCode,
});
const getLocalization = (country, lang) => ({
    name: country.localizations[lang].name,
    description: country.localizations[lang].description,
    capital: country.localizations[lang].capital,
});
const getSights = (sights, lang) => {
    const arr = sights.map((sight) => ({
        name: sight.localizations[lang].name,
        description: sight.localizations[lang].description,
        id: sight.sightId,
        smallImageId: sight.smallImageId,
        imageId: sight.imageId,
        rating: sight.rating,
    }));
    return { sights: arr };
};
const getAllByLang = (lang) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield model.CountryModel.find({});
    return data.map((cur) => {
        return Object.assign({}, getBasicData(cur, lang - 1));
    });
});
exports.getAllByLang = getAllByLang;
const getOneByLang = (id, lang) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield model.CountryModel.findOne({ countryId: id });
    return Object.assign(Object.assign(Object.assign({}, getFullBasicData(data)), getLocalization(data, lang - 1)), getSights(data.sights, lang - 1));
});
exports.getOneByLang = getOneByLang;
const isVotedUser = (users, name) => {
    let isUser = false;
    users.forEach((user) => {
        if (user.name === name)
            isUser = true;
    });
    return isUser;
};
const changeRating = (rating, obj) => {
    rating.points = (rating.points * rating.votes + obj.points) / (rating.votes + 1);
    rating.votes += 1;
    rating.votedUsers.push({
        name: obj.name,
        imageId: obj.imageId,
        points: obj.points,
    });
    return rating;
};
const setData = (newData, obj) => __awaiter(void 0, void 0, void 0, function* () {
    yield model.CountryModel.updateOne({ countryId: obj.countryId }, { $set: { "sights": newData.sights } });
});
const putAndGetRating = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield model.CountryModel.findOne({ countryId: obj.countryId });
    const rating = data.sights[obj.sightId - 1].rating;
    const users = rating.votedUsers;
    if (!isVotedUser(users, obj.name)) {
        data.sights[obj.sightId - 1].rating = changeRating(rating, obj);
        setData(data, obj);
        return data;
    }
    return null;
});
exports.putAndGetRating = putAndGetRating;
