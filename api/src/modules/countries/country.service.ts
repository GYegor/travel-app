import countryRepo = require('./country.repository');
import types = require('./country.types');

export const getAll = async (lang: number) => {
    const countries = await countryRepo.getAllByLang(lang);
    return countries;
}

export const getOne = async(id: number, lang: number) => {
    const country = await countryRepo.getOneByLang(id, lang);
    return country;
}