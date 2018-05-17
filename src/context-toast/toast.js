import React from 'react';
import { Consumer } from './context';
import { Toast as StyledToast, Title, Message, Close } from './common';

const Toast = ({ toast, index }) => (
  <Consumer>
    {({ removeToast, index }) => (
      <StyledToast>
        <div style={{ flex: 1 }}>
          <Title>{toast.title}</Title>
          <Message>{toast.message}</Message>
        </div>
        <Close
          onClick={() => {
            removeToast(index);
          }}
        >
          Close
        </Close>
      </StyledToast>
    )}
  </Consumer>
);

export default Toast;
