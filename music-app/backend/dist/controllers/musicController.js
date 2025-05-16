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
class MusicController {
    constructor(musicModel) {
        this.musicModel = musicModel;
    }
    getAllMusic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const musicList = yield this.musicModel.find();
                res.status(200).json(musicList);
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving music', error });
            }
        });
    }
    addMusic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, artist, genre } = req.body;
            const newMusic = new this.musicModel({ title, artist, genre });
            try {
                const savedMusic = yield newMusic.save();
                res.status(201).json(savedMusic);
            }
            catch (error) {
                res.status(400).json({ message: 'Error adding music', error });
            }
        });
    }
}
exports.default = MusicController;
