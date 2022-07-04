"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.json({ message: 'list of users' });
        });
        this.router.get('/:id');
        this.router.post('/', users_controller_1.default.create);
        this.router.put('/:id');
        this.router.delete('/:id');
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
