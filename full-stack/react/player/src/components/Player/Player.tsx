import React from 'react';

export interface SongDetails {
  title: string,
  author: string,
}

interface PlayerProps {
  nowPlaying: SongDetails
}

function Player({nowPlaying}: PlayerProps) {
  return (
    <>
      <h1>{nowPlaying.title}</h1>
      <h2>{nowPlaying.author}</h2>
    </>
  );
}

export default Player;
