import countryRepo = require('./country.repository');
import types = require('./country.types');

export const getAll = async (lang: number): Promise<Array<types.ICountryBase>> => {
    const countries = await countryRepo.getAllByLang(lang);
    return countries;
}

export const getOne = async(id: number, lang: number): Promise<types.ICountry> => {
    const country = await countryRepo.getOneByLang(id, lang);
    return country;
}

export const putRating = async (obj: any) => {
    const newRating = await countryRepo.putAndGetRating(obj);
    return newRating;
}