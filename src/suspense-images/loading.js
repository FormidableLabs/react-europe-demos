import React, { Component } from 'react';
import styled from 'styled-components';

import merica from './assets/merica.gif';

const Center = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
  min-height: 300px;
  align-items: center;
  justify-content: center;
`;

export default class TodoList extends Component {
  render() {
    return (
      <Center>
        <img src={merica} />
      </Center>
    );
  }
}
