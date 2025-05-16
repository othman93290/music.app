import mongoose from 'mongoose';

const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: false
    },
    duration: {
        type: Number,
        required: false // duration in seconds
    }
});

const Music = mongoose.model('Music', musicSchema);

export default Music;