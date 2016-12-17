import React from 'react';

import {
  Toolbar,
  BackButton
} from 'react-onsenui';

const NavToolBar = ({title, navigator, backButton}) => (
  <Toolbar>
    <div className='left'>
      {backButton ? <BackButton onClick={() => navigator.popPage()}>Back</BackButton> : null}
    </div>
    <div className='center'>{title}</div>
  </Toolbar>
);

export default NavToolBar;