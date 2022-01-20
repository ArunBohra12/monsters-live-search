import React from 'react';

import './card.styles.css';

export const Card = props => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=5&size=150x150`} alt="Monster" />
      <h2 key={props.monster.id}>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
