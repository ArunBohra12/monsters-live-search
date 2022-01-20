import React from 'react';
import { Card } from '../card/card.comp';
import './card-list.styles.css';

export const CardList = props => {
  if (props.monsters.length) {
    return (
      <div className="card-list">
        {props.monsters.map(monster => (
          <div key={monster.id} onClick={() => props.showPopup(monster)}>
            <Card monster={monster} />
          </div>
        ))}
      </div>
    );
  } else {
    return <h2>No monsters</h2>;
  }
};
