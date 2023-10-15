import React from 'react';

import Body from "../Body/Body";
import Header from "../Header/Header";

import './card.css'

interface CardProps {
  profileImg: string;
  username: string;
  message: string;
  index: number;
}

function Card(props: CardProps) {
  return (
     <div>
      <Header
        profileImg={props.profileImg}
        username={props.username}
      />
      <Body message={props.message} />
    </div>
  );
}

export default Card;
