import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTODO } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: typeof Function;
  deleteTodo: typeof deleteTODO;
}
export class _App extends React.Component<AppProps> {
  onFetch = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    const handleDeleteTodo = (id: number) => {
      this.props.deleteTodo(id);
    };
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => handleDeleteTodo(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.onFetch}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTODO })(_App);
