import React from 'react';
import { SimpleCache } from 'simple-cache-provider';
import { Consumer } from './context';

export function withCache(Component) {
  return props => (
    <SimpleCache.Consumer>
      {cache => (
        <Consumer>
          {client => (
            <Component suspenseCache={cache} client={client} {...props} />
          )}
        </Consumer>
      )}
    </SimpleCache.Consumer>
  );
}
