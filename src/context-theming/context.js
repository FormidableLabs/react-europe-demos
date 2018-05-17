import { createContext } from 'react';

import baguette from './assets/baguette.jpg';
import DefaultHeader from './default-header';

const { Consumer, Provider } = createContext(
  image: baguette,
  HeaderComponent: DefaultHeader,
});

export { Provider, Consumer };
