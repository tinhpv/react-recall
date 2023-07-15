import { ActionType } from '../action-types';

export interface SearchRepoAction {
  type: ActionType.SEARCH_REPO;
}

interface SearchRepoSuccessAction {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchRepoErrorAction {
  type: ActionType.SEARCH_REPO_FAILED;
  payload: string;
}

export type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction;
