import React, { Timeout, Component } from 'react';
import ReactDOM from 'react-dom';

import { Container, Select, H1 } from './common';

import Images from './images';
import Loading from './loading';

const Placeholder = props => {
  return (
    <Timeout ms={500}>
      {didTimeout => {
        return didTimeout ? <Loading /> : props.children;
      }}
    </Timeout>
  );
};

export default class SuspenseImages extends Component {
  state = {
    repo: 'spectacle',
  };
  updateRepo = e => {
    ReactDOM.unstable_deferredUpdates(() => {
      this.setState({
        repo: e.target.value,
      });
    });
  };
  render() {
    return (
      <Container>
        <H1>People I've Let Down</H1>
        <Select name="text" onChange={this.updateRepo} value={this.state.repo}>
          <option value="spectacle">Spectacle</option>
          <option value="urql">Urql</option>
          <option value="webpack-dashboard">Webpack Dashboard</option>
          <option value="nuka-carousel">Nuka Carousel</option>
        </Select>
        <Placeholder>
          <Images repo={this.state.repo} />
        </Placeholder>
      </Container>
    );
  }
}
