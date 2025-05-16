import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { IMusic } from '../models/music';

class MusicController {
    private musicModel: Model<IMusic>;

    constructor(musicModel: Model<IMusic>) {
        this.musicModel = musicModel;
    }

    async getAllMusic(req: Request, res: Response) {
        try {
            const musicList = await this.musicModel.find();
            res.status(200).json(musicList);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving music', error });
        }
    }

    async addMusic(req: Request, res: Response) {
        const { title, artist, genre } = req.body;
        const newMusic = new this.musicModel({ title, artist, genre });

        try {
            const savedMusic = await newMusic.save();
            res.status(201).json(savedMusic);
        } catch (error) {
            res.status(400).json({ message: 'Error adding music', error });
        }
    }
}

export default MusicController;