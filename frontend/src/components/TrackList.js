import React from 'react';

export default function TrackList({ tracks, onSelect }) {
  return (
    <div>
      <h2>Liste des morceaux</h2>
      <ul>
        {tracks.map(track => (
          <li key={track._id} onClick={() => onSelect(track)}>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}