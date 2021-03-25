import React from 'react';
import '../SideInfo/side-info.css';

function sideInfo({ info, icon }) {
  return (
    <div className="side-info">
      <p>{info}</p>
      <p>{icon}</p>
    </div>
  );
}

export default sideInfo;
