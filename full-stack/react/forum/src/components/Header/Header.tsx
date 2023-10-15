import React from 'react';

import './header.css'

interface HeaderProps {
  profileImg: string;
  username: string;
}

function Header(props: HeaderProps) {
  return (
    <div className="header">
      <img src={props.profileImg} alt={`${props.username}-picture`} />
      <h1>{props.username}</h1>
    </div>
  );
}

export default Header;
