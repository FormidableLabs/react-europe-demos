import React from 'react';
import { Header as StyledHeader } from './common';

const DefaultHeader = ({ children }) => (
  <StyledHeader style={{ background: '#5a2e2e' }}>{children}</StyledHeader>
);

export default DefaultHeader;
