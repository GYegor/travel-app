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
exports.checkAndLogin = exports.checkAndReg = void 0;
const model = require("./user.model");
const checkAndReg = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield model.UserModel.findOne({ name: obj.name });
    if (data) {
        return null;
    }
    const newUser = Object.assign(Object.assign({}, obj), { lang: 'en' });
    (new model.UserModel(newUser)).save();
    return newUser;
});
exports.checkAndReg = checkAndReg;
const checkAndLogin = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield model.UserModel.findOne({ name: obj.name });
    return data;
});
exports.checkAndLogin = checkAndLogin;
