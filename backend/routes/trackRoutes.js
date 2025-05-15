const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');
const auth = require('../middlewares/auth');

// Récupérer tous les morceaux
router.get('/', trackController.getAllTracks);
// Ajouter un morceau (authentification requise)
router.post('/', auth, trackController.addTrack);

module.exports = router;