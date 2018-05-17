import React, { Component } from 'react';

import { Provider } from './context';

import { Container, Logo, Body } from './common';

import Header from './header';
import Product from './product';
import loaf from './assets/loaf.jpg';
import MericaHeader from './merica-header';

export default class ContextToast extends Component {
  render() {
    return (
      <Provider value={{ image: loaf, HeaderComponent: MericaHeader }}>
        <Container>
          <Header>
            <Logo style={{ fontFamily: 'Marker Felt' }}>FREEDOM BREAD</Logo>
          </Header>
          <Body>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Body>
        </Container>
      </Provider>
    );
  }
}
