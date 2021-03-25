import React from 'react';
import '../sidebar/sidebar.css';
import SideInfo from '../SideInfo/sideInfo';

function sidebar() {
  return (
    <div className=" sidebar">
      <SideInfo info={'Dashboard'} icon={'icon'} />
      <SideInfo info={'UI Elements'} icon={'icon'} />
      <SideInfo info={'Components'} icon={'icon'} />
      <SideInfo info={'Forms Stuff'} icon={'icon'} />
      <SideInfo info={'Datatable'} icon={'icon'} />
      <SideInfo info={'Icons'} icon={'icon'} />
      <SideInfo info={'Sample Page'} icon={'icon'} />
      <SideInfo info={'Extra'} icon={'icon'} />
    </div>
  );
}

export default sidebar;
