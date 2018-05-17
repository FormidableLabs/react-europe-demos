import React from 'react';
import { Consumer } from './context';
import { Button as StyledButton } from './common';

const Button = () => (
  <Consumer>
    {({ increment }) => (
      <StyledButton onClick={increment}>Increment</StyledButton>
    )}
  </Consumer>
);

export default Button;
