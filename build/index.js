"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utilities/logger"));
var app = (0, express_1.default)();
var port = 3000;
//routes 
app.get('/continents', logger_1.default, function (req, res) {
    res.send('continents');
});
app.get('/countries', logger_1.default, function (req, res) {
    res.send('countries');
});
app.get('/oceans', logger_1.default, function (req, res) {
    res.send('oceans');
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
