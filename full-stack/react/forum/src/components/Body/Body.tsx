
import React from 'react';

import './body.css'

interface BodyProps {
  message: string;
}

function Body(props: BodyProps) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default Body;
