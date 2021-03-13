import model = require('./user.model');
import types = require('./user.types');

export const checkAndReg = async (obj: any): Promise<types.IUserSchema | null> => {
    const data: types.IUserDocument = await model.UserModel.findOne({ name: obj.name });

    if (data) {
        return null;
    }

    const newUser: types.IUserSchema = {
        ...obj,
        lang: 'en',
    };

    (new model.UserModel(newUser)).save();

    return newUser;
}