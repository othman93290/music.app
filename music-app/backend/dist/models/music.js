"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const musicSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date },
    duration: { type: Number }
});
const Music = mongoose_1.default.model('Music', musicSchema);
exports.default = Music;
