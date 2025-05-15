import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Signup from './components/Signup';
import Login from './components/Login';
import Player from './components/Player';
import TrackList from './components/TrackList';

function App() {
  const [user, setUser] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tracks')
      .then(res => setTracks(res.data));
  }, []);

  return (
    <div>
      <h1>Music App</h1>
      {!user ? (
        <>
          <Signup />
          <Login onLogin={setUser} />
        </>
      ) : (
        <>
          <div>Bienvenue, {user} !</div>
          <TrackList tracks={tracks} onSelect={setSelectedTrack} />
          <Player track={selectedTrack} />
        </>
      )}
    </div>
  );
}

export default App;