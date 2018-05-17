import React from 'react';
import { Consumer } from './context';
import { Button as StyledButton } from './common';

const Button = ({ index, children }) => (
  <Consumer>
    {({ addToast }) => (
      <StyledButton
        onClick={() => {
          addToast(index);
        }}
      >
        {children}
      </StyledButton>
    )}
  </Consumer>
);

export default Button;
