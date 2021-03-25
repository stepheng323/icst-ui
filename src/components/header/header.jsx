import React from 'react';
import '../header/header.css';

// import SearchIcon from '@material-ui/icons/Search';

function Nav() {
  return (
    <div className="header">
      <div className="header-menu-logo">
        <h1>blueBox</h1>
      </div>
      <form className="header-input">
        <input placeholder="Search" type="text" />
        <div className="search-btn">
          {/* <SearchIcon className="header-button" /> */}
        </div>
      </form>
      <div className="header-icons">
        <div></div>
      </div>
    </div>
  );
}

export default Nav;
