import express = require('express');
import wrap = require('../../common/errors/async-error-wrapper');
import types = require('./country.types');
import countryService = require('./country.service');
import config = require('../../common/config');
import dataCountry = require('./data');

const router = express.Router();

router.get('/', wrap(async (req, res): Promise<void> => {
    const lang: string = req.query.lang || config.DEFAULT_LANG;
    // await model.CountryModel.create(Italy);
    // await model.CountryModel.create(China);
    // await model.CountryModel.create(Spain);
    const data = await countryService.getAll(types.Language[lang]);
    res.json(data);
}));

router.get('/:id', wrap(async (req, res): Promise<void> => {
    const lang: string = req.query.lang || config.DEFAULT_LANG;
    const { id } = req.params;
    const data = await countryService.getOne(id, types.Language[lang]);
    res.json(data);
}));

router.get('/rating', wrap(async (req, res): Promise<void> => {
    const obj = {
      countryId: 6,
      sightId: 1,
      name: 'userName2',
      imageId: 'imageId',
      points: 3,
    }
    const data = await countryService.putRating(obj);
    res.json(data);
}));

export = router;
