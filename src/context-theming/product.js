import React from 'react';
import { Consumer } from './context';
import { Product as StyledProduct, Image } from './common';

const Product = () => (
  <Consumer>
    {({ image }) => (
      <StyledProduct>
        <Image src={image} />
        <h2>One Loaf</h2>
        <p>$5.99</p>
      </StyledProduct>
    )}
  </Consumer>
);

export default Product;
