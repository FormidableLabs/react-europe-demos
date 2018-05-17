import React from 'react';
import { Consumer } from './context';
import { Count } from './common';

const Counter = () => (
  <Consumer>{({ count }) => <Count>{count}</Count>}</Consumer>
);

export default Counter;
