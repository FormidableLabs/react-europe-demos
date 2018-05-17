import React, { Timeout, Component } from 'react';
import ReactDOM from 'react-dom';
import { SimpleCache, createResource } from 'simple-cache-provider';

import { Container, Header, Button, Body } from './common';
import { withCache } from './withCache';
import todos from './todos';
import TodoList from './todo-list';
import Loading from './loading';
import App from './app';

// Create our resource
const getTodos = createResource(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(todos);
      }, 500);
    })
);

// Create our  component
const Todos = withCache(props => {
  const data = getTodos.read(props.cache);
  return <TodoList todos={data} />;
});

// Create loader
const Placeholder = props => {
  return (
    <Timeout ms={1000}>
      {didTimeout => {
        return didTimeout ? <Loading /> : props.children;
      }}
    </Timeout>
  );
};

export default class SuspenseData extends Component {
  render() {
    return (
      <Container>
        <Header>List Of Shit I Should Do</Header>
        <Body>
          <Placeholder>
            <Todos />
          </Placeholder>
        </Body>
      </Container>
    );
  }
}
