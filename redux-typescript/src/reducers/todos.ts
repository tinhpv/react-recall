import { Todo, ActionTypes, TodoAction } from '../actions';

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ActionTypes.fetchTODOs:
      return action.payload;
    case ActionTypes.deleteTODOs:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
