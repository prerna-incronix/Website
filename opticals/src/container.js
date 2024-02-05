// card.js
import React from 'react';
import './container.css'; // Create a separate CSS file for card styling

const container = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default container;
