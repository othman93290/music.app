import { Router } from 'express';
import MusicController from '../controllers/musicController';

const router = Router();
const musicController = new MusicController();

export function setRoutes(app) {
    app.use('/api/music', router);

    router.get('/', musicController.getAllMusic);
    router.post('/', musicController.addMusic);
}