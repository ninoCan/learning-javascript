import React from 'react';

import Player, { SongDetails } from './components/Player/Player';
import PlayableButtons from './components/PlayableButtons/PlayableButtons'

export default () => {
  const currentSong: SongDetails = {
    title: "Stairway to heaven",
    author: "Led Zeppelin",
  }
  return (
    <div>
      <Player nowPlaying={currentSong} />
      <PlayableButtons />
    </div>
  );
}
