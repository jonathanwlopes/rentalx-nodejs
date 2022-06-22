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
exports.ensureAuthenticated = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../errors/AppError");
const UsersRepository_1 = require("../modules/accounts/repositories/implementations/UsersRepository");
function ensureAuthenticated(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new AppError_1.AppError("Token missing", 401);
        }
        const [, token] = authHeader.split(" ");
        try {
            const { sub: user_id } = (0, jsonwebtoken_1.verify)(token, "8016a5929e83b38a54fe4e380f52b4dc");
            const usersRepository = new UsersRepository_1.UsersRepository();
            const user = yield usersRepository.findById(user_id);
            if (!user) {
                throw new AppError_1.AppError("User does not exists!", 401);
            }
            express_1.request.user = {
                id: user_id
            };
            next();
        }
        catch (e) {
            throw new AppError_1.AppError("Invalid token!", 401);
        }
    });
}
exports.ensureAuthenticated = ensureAuthenticated;
//# sourceMappingURL=ensureAuthenticated.js.map