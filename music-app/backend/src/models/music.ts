import mongoose, { Document, Model } from 'mongoose';

export interface IMusic extends Document {
    title: string;
    artist: string;
    genre: string;
    releaseDate?: Date;
    duration?: number;
}

const musicSchema = new mongoose.Schema<IMusic>({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date },
    duration: { type: Number }
});

const Music: Model<IMusic> = mongoose.model<IMusic>('Music', musicSchema);

export default Music;