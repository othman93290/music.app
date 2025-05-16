# Music App - Type Deezer/Spotify

## Project Structure

- **backend/** : Node.js/Express server, MongoDB database management, authentication
- **frontend/** : React interface
- **README.md** : this file

## Basic Features

- User account creation
- User login
- Upload and playback of music, playlist creation, etc. (to be completed)

## Getting Started

1. **Backend**
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file with the following content:
     ```
     MONGO_URI=mongodb://localhost:27017/musicapp
     JWT_SECRET=yourSuperSecretKey
     ```
   - Start the server:
     ```
     node src/server.js
     ```

2. **Frontend**
   - Navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the development server:
     ```
     npm start
     ```

## Technologies Used

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, TypeScript

## Future Improvements

- Implement music upload and playback features
- Enhance user authentication and authorization
- Add playlist management capabilities

## License

This project is licensed under the MIT License - see the LICENSE file for details.