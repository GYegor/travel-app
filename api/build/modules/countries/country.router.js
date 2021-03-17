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
const express = require("express");
const wrap = require("../../common/errors/async-error-wrapper");
const types = require("./country.types");
const countryService = require("./country.service");
const config = require("../../common/config");
const router = express.Router();
router.get('/', wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lang = req.query.lang || config.DEFAULT_LANG;
    const data = yield countryService.getAll(types.Language[lang]);
    res.json(data);
})));
// router.get('/create', async (req, res) => {
//     await model.CountryModel.create(dataCountry.Egypt);
//     await model.CountryModel.create(dataCountry.England);
//     await model.CountryModel.create(dataCountry.Germany);
//     await model.CountryModel.create(dataCountry.Poland);
//     res.json({});
// })
router.put('/rating', wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield countryService.putRating(req.body);
    res.json(data);
})));
router.get('/:id', wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lang = req.query.lang || config.DEFAULT_LANG;
    const { id } = req.params;
    const data = yield countryService.getOne(id, types.Language[lang]);
    res.json(data);
})));
module.exports = router;
