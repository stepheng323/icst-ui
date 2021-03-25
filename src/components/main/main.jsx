import React from 'react';
import Box from '../Box/box';
import '../main/main.css';

function main() {
  return (
    <div className="main">
      <h2>Dashboard</h2>
      <div className="boxes">
        <Box
          Icon={'icon'}
          title={'Stock Total'}
          price={1500000}
          increase={'Increased by 60%'}
          color={'purple'}
        />
        <Box
          Icon={'icon'}
          title={'Total Profit'}
          price={25000}
          increase={'Increased by 30%'}
          color={'blue'}
        />
        <Box
          Icon={'icon'}
          title={'Unique Visitor'}
          price={2500000}
          increase={'Increased by 80%'}
          color={'orange'}
        />
      </div>
    </div>
  );
}

export default main;
