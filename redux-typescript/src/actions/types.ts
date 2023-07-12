import { fetchTODOsAction, deleteTODOsAction } from './todos';

export type TodoAction = fetchTODOsAction | deleteTODOsAction;

export enum ActionTypes {
  fetchTODOs,
  deleteTODOs,
}
