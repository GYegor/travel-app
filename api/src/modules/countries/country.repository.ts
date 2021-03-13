import model = require('./country.model');
import errors = require('../../common/errors/errors-list');
import types = require('./country.types');

const getBasicData = (country: types.ICountryDocument, lang: number) => ({
    id: country.countryId,
    smallImageId: country.smallImageId,
    name: country.localizations[lang].name,
    capital: country.localizations[lang].capital,
    localTimeDiff: country.localTimeDiff,
});

const getFullBasicData = (country: types.ICountryDocument) => ({
    id: country.countryId,
    imageId: country.imageId,
    videoUrl: country.videoUrl,
    coordinates: country.coordinates,
    localTimeDiff: country.localTimeDiff,
});

const getLocalization = (country: types.ICountryDocument, lang: types.Language) => ({
    name: country.localizations[lang].name,
    description: country.localizations[lang].description,
    capital: country.localizations[lang].capital,
});

const getSights = (sights: Array<types.ISightSchema>, lang: types.Language) => {
    const arr =  sights.map((sight) => ({
        name: sight.localizations[lang].name,
        description: sight.localizations[lang].description,
        id: sight.sightId,
        smallImageId: sight.smallImageId,
        imageId: sight.imageId,
        rating: sight.rating,
    }));
    return {sights: arr};
};

export const getAllByLang = async (lang: number): Promise<Array<types.ICountryBase>> => {
    const data = await model.CountryModel.find({});
    return data.map((cur) => {
        return {
            ...getBasicData(cur, lang - 1),
        }
    })
}

export const getOneByLang = async (id: number, lang: number): Promise<types.ICountry> => {
    const data = await model.CountryModel.findOne({ countryId: id });
    return {
        ...getFullBasicData(data),
        ...getLocalization(data, lang - 1),
        ...getSights(data.sights, lang - 1),
    }
}