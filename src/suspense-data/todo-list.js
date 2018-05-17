import React, { Component } from 'react';

import { Todo, Todos } from './common';

export default class TodoList extends Component {
  render() {
    return (
      <Todos>
        {this.props.todos.map((todo, index) => {
          return (
            <Todo key={todo.id}>
              {index + 1}. {todo.text}
            </Todo>
          );
        })}
      </Todos>
    );
  }
}
