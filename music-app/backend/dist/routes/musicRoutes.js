"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const musicController_1 = __importDefault(require("../controllers/musicController"));
const music_1 = __importDefault(require("../models/music"));
const router = (0, express_1.Router)();
const musicController = new musicController_1.default(music_1.default);
router.get('/', (req, res) => musicController.getAllMusic(req, res));
router.post('/', (req, res) => musicController.addMusic(req, res));
exports.default = router;
