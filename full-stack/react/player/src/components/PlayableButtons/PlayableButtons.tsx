import React from 'react'

import './style.css'

function PlayableButtons() {
  return (
    <>
      <span className="material-symbols-outlined">
        fast_rewind
      </span>
      <span className="material-symbols-outlined">
        play_circle
      </span>
      <span className="material-symbols-outlined">
        fast_forward
      </span>
    </>
  );
}

export default PlayableButtons;