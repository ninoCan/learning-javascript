import React, { useState } from 'react'

import './style.css'

function PlayableButtons() {
  const [playing, setPlaying] = useState<boolean>(false)

  function togglePlaying() {
    return setPlaying(!playing);
  }

  function stopPlaying() {
    return setPlaying(false);
  }

  return (
    <>
      <span className="material-symbols-outlined">
        fast_rewind
      </span>
      <span className="material-symbols-outlined" onClick={togglePlaying}>
        {(playing) ? "pause" : "play_circle"}
      </span>
      <span className="material-symbols-outlined">
        fast_forward
      </span>
    </>
  );
}

export default PlayableButtons;