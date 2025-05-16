import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import musicRoutes from './routes/musicRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/music', musicRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});