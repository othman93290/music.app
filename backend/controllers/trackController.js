const Track = require('../models/Track');

exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.find().sort({ createdAt: -1 });
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addTrack = async (req, res) => {
  const { title, artist, album, url, cover } = req.body;
  try {
    const track = new Track({
      title,
      artist,
      album,
      url,
      cover,
      uploadedBy: req.userId
    });
    await track.save();
    res.status(201).json(track);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};