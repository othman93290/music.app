import { Router } from 'express';
import MusicController from '../controllers/musicController';
import Music from '../models/music';

const router = Router();
const musicController = new MusicController(Music);

router.get('/', (req, res) => musicController.getAllMusic(req, res));
router.post('/', (req, res) => musicController.addMusic(req, res));

export default router;