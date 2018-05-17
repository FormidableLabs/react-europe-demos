import React, { Component } from 'react';

import { Provider } from './context';
import toastValues from './toasts';

import { Container, Header, Logo, Body, ToastHolder } from './common';
import Button from './button';
import Toast from './toast';

export default class ContextToast extends Component {
  state = {
    toasts: [],
  };
  addToast = index => {
    this.setState(state => {
      let toasts = [...state.toasts];
      toasts.push(toastValues[index]);
      return {
        toasts,
      };
    });
  };
  removeToast = index => {
    this.setState(state => {
      let toasts = [...state.toasts];
      toasts.splice(index, 1);
      return {
        toasts,
      };
    });
  };
  renderToasts = () => (
    <ToastHolder>
      {this.state.toasts.map((toast, index) => {
        return <Toast toast={toast} key={index} index={index} />;
      })}
    </ToastHolder>
  );
  contextValue = {
    addToast: this.addToast,
    removeToast: this.removeToast,
  };
  render() {
    return (
      <Provider value={this.contextValue}>
        <Container>
          {this.renderToasts()}
          <Header>
            <Logo>dorkbook</Logo>
          </Header>
          <Body>
            <Button index={0}>Toast 1</Button>
            <Button index={1}>Toast 2</Button>
            <Button index={2}>Toast 3</Button>
          </Body>
        </Container>
      </Provider>
    );
  }
}
