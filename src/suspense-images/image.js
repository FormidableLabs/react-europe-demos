import React from 'react';

import { createResource } from 'simple-cache-provider';
import { withCache } from './withCache';

function loadImage(src) {
  const image = new Image();
  return new Promise(resolve => {
    image.onload = () => setTimeout(() => resolve(src), 0);
    image.src = src;
  });
}

const { read } = createResource(loadImage);

function Img(props) {
  return <img alt="colllaborator" src={read(props.suspenseCache, props.src)} />;
}

export default withCache(Img);
