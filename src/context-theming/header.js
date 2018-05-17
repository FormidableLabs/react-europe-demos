import React from 'react';
import { Consumer } from './context';

const Header = ({ children }) => (
  <Consumer>
    {({ HeaderComponent }) => <HeaderComponent>{children}</HeaderComponent>}
  </Consumer>
);

export default Header;
