import express = require('express');
import wrap = require('../../common/errors/async-error-wrapper');
// import countryService = require('./country.service');
// import validateId = require('../../common/validation/objectID.validation');
import types = require('./country.types');
import model = require('./country.model');
import countryService = require('./country.service');
import config = require('../../common/config');

// import countryRepo = require('./country.repository');

const router = express.Router();

const countryExample: types.ICountrySchema = {
    countryId: 1,
    imageUrl: 'imageUrl',
    smallImageUrl: 'smallImageUrl',
    videoUrl: 'videoUrl',
    coordinates: 'coordinates',
    sights: [{
        sightId: 3,
        imageUrl: 'imageUrl',
        // rating: {
        //     points: 1,
        //     votes: 1,
        //     votedUsers: [{
        //         userId: 1,
        //         name: 'Name',
        //         imageUrl:'imageUrl',
        //         points: 1,
        //     }],
        // },
        localizations: [
            {
                name: 'name',
                description: 'description',
            },
            {
                name: 'имя',
                description: 'описание',
            },
            {
                name: 'імя',
                description: 'апісанне',
            },
        ],
    }],
    localizations: [
        {
            name: 'name',
            description: 'description',
            capital: 'capital',
        },
        {
            name: 'имя',
            description: 'описание',
            capital: 'столица',
        },
        {
            name: 'імя',
            description: 'апісанне',
            capital: 'сталіца',
        },
    ],
}

router.get('/', wrap(async (req, res): Promise<void> => {
    const lang: string = req.query.lang || config.DEFAULT_LANG;
    // await model.CountryModel.create(countryExample);
    const data = await countryService.getAll(types.Language[lang]);
    res.json(data);
}));

router.get('/country/:id', wrap(async (req, res): Promise<void> => {
    const lang: string = req.query.lang || config.DEFAULT_LANG;
    const { id } = req.params;
    const data = await countryService.getOne(id, types.Language[lang]);
    res.json(data);
}));

export = router;