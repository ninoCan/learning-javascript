import React from 'react';
import comments from './mockData'

import Card from './components/Card/Card'
import './App.css'

function App() {
  return (
    <div className="profiles">
      {
        comments.map((comment, index) => {
            return (
              <span>
                <Card
                  profileImg={comment.profileImg}
                  username={comment.username}
                  message={comment.comment}
                  index={index}
                />
              </span>
            );
          })
      }
    </div>
  );
   ;
}

export default App;
