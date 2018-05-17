import React, { Component } from 'react';

import { Provider } from './context';

import Counter from './counter';
import Button from './button';
import { Container } from './common';

import './index.css';

export default class ContextData extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  render() {
    return (
      <Provider value={{ count: this.state.count, increment: this.increment }}>
        <Container>
          <Counter />
          <Button />
        </Container>
      </Provider>
    );
  }
}
