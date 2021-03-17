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
exports.putRating = exports.getOne = exports.getAll = void 0;
const countryRepo = require("./country.repository");
const getAll = (lang) => __awaiter(void 0, void 0, void 0, function* () {
    const countries = yield countryRepo.getAllByLang(lang);
    return countries;
});
exports.getAll = getAll;
const getOne = (id, lang) => __awaiter(void 0, void 0, void 0, function* () {
    const country = yield countryRepo.getOneByLang(id, lang);
    return country;
});
exports.getOne = getOne;
const putRating = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const newRating = yield countryRepo.putAndGetRating(obj);
    return newRating;
});
exports.putRating = putRating;
