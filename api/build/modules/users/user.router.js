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
const userService = require("./user.service");
const router = express.Router();
router.post('/registration', wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userService.regUser(req.body);
    if (result) {
        res.status(201).json(result);
        return;
    }
    res.status(409).json({
        message: [
            'this user is already registered',
            'Указанный пользователь зарегистрирован',
            'Ўказаны карыстальнік зарэгістраваны',
        ]
    });
})));
router.post('/login', wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userService.loginUser(req.body);
    if (result) {
        res.json(result);
        return;
    }
    res.status(401).json({
        message: [
            'this user is no registered',
            'Указанный пользователь не зарегистрирован',
            'Ўказаны карыстальнік не зарэгістраваны',
        ]
    });
})));
module.exports = router;
