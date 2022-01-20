import React from 'react';

import './popup.styles.css';

export const Popup = ({ monster, closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup-cross-btn" onClick={() => closePopup()}>
          &times;
        </button>
        <img src={`https://robohash.org/${monster.id}?set=5&size=150x150`} alt="Monster" />
        <div className="details">
          <h3>{monster.name}</h3>
          <p>{monster.email}</p>
          <p>{monster.phone}</p>
          <p>{monster.website}</p>
        </div>
      </div>
    </div>
  );
};
