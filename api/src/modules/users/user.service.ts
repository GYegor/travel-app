import countryRepo = require('./user.repository');
import types = require('./user.types');

export const regUser = async (obj: any): Promise<types.IUserSchema | null> => {
    const res = await countryRepo.checkAndReg(obj);
    return res;
}