import React, { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [plusLikes, setPlusLikes] = useState(likes);
  const [plusDislikes, setPlusDislikes] = useState(dislikes);
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={() => setPlusLikes(plusLikes + 1)}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {plusLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={() => setPlusDislikes(plusDislikes + 1)}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {plusDislikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;
