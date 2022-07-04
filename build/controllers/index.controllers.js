"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    indexreq(req, res) {
        res.send('hello');
    }
}
exports.indexController = new IndexController();
