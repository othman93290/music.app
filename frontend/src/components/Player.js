import React from 'react';

export default function Player({ track }) {
  if (!track) return <div>Sélectionnez un morceau</div>;
  return (
    <div>
      <h3>{track.title} - {track.artist}</h3>
      <audio controls src={track.url} />
      {track.cover && <img src={track.cover} alt={`${track.title} cover`} width={150} />}
    </div>
  );
}