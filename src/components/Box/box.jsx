import React from 'react';
import '../Box/box.css';

function box({ Icon, price, title, increase, color }) {
  return (
    <div style={{ background: color }} className="box">
      <p className="box-icon">{Icon}</p>
      <p className="box-title">{title}</p>
      <h3 className="box-price">{price}</h3>
      <p className="box-increase">{increase}</p>
    </div>
  );
}

export default box;
