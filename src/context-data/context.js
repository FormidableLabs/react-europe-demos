import { createContext } from 'react';

const { Consumer, Provider } = createContext({
  count: 0,
});

export { Provider, Consumer };
