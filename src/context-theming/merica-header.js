import React from 'react';
import { Header as StyledHeader } from './common';
import flag from './assets/flag.jpg';

const DefaultHeader = ({ children }) => (
  <StyledHeader style={{ background: `url(${flag})` }}>{children}</StyledHeader>
);

export default DefaultHeader;
