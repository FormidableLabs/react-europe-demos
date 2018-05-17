import React, { Component } from 'react';

import App from './app';
import { Client } from 'urql';
import { Provider } from './context';

import TOKEN from './token.js';

const client = new Client({
  url: 'https://api.github.com/graphql',
  fetchOptions: () => ({
    headers: {
      authorization: `Bearer ${TOKEN}`,
    },
  }),
});

export default class SuspenseData extends Component {
  render() {
    return (
      <Provider value={client}>
        <App />
      </Provider>
    );
  }
}
