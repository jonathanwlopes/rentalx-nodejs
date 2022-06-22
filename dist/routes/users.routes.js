"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("../config/upload"));
const CreateUserController_1 = require("../modules/accounts/useCases/createUser/CreateUserController");
const UpdateUserAvatarController_1 = require("../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController");
exports.usersRoutes = (0, express_1.Router)();
const uploadAvatar = (0, multer_1.default)(upload_1.default.upload("./tmp/avatar"));
const createUserController = new CreateUserController_1.CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController_1.UpdateUserAvatarController();
exports.usersRoutes.post("/", createUserController.handle);
exports.usersRoutes.patch("/avatar", uploadAvatar.single("avatar"), updateUserAvatarController.handle);
//# sourceMappingURL=users.routes.js.map