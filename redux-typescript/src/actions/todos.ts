import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface fetchTODOsAction {
  type: ActionTypes.fetchTODOs;
  payload: Todo[];
}

export interface deleteTODOsAction {
  type: ActionTypes.deleteTODOs;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos',
    );
    dispatch<fetchTODOsAction>({
      type: ActionTypes.fetchTODOs,
      payload: response.data,
    });
  };
};

export const deleteTODO = (id: number): deleteTODOsAction => {
  return {
    type: ActionTypes.deleteTODOs,
    payload: id,
  };
};
