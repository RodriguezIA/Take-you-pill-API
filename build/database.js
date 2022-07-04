"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const pool = promise_mysql_1.default.createPool({
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
    host: process.env.DB_HOST
});
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is conected');
});
exports.default = pool;
