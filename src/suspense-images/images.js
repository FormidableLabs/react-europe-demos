import React, { Timeout } from 'react';

import { query } from 'urql';
import { createResource } from 'simple-cache-provider';
import get from 'lodash/get';

import { withCache } from './withCache';
import Img from './image';

const imagesResource = createResource(async ({ client, repo }) => {
  const data = await client.executeQuery(query(imageQuery, { name: repo }));
  return data;
}, ({ repo }) => repo);

class Images extends React.Component {
  render() {
    const data = imagesResource.read(this.props.suspenseCache, {
      client: this.props.client,
      repo: this.props.repo,
    });
    const images = get(data, 'data.repository.collaborators.nodes');
    return <ImageList images={images} />;
  }
}

const ImageList = ({ images }) => (
  <ul>
    {images.map(image => <Img key={image.avatarUrl} src={image.avatarUrl} />)}
  </ul>
);

const Placeholder = props => {
  return (
    <Timeout ms={500}>
      {didTimeout => {
        return didTimeout ? <Img src={props.src} /> : props.children;
      }}
    </Timeout>
  );
};

const imageQuery = `
query($name: String!) {
  repository(name: $name owner: "FormidableLabs") {
   collaborators(first: 20){
     nodes {
       avatarUrl(size: 150),
     }
   }
 }
}
`;

export default withCache(Images);
