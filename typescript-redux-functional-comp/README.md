# Functional Component - Typescript

<h2>Some notes</h2>

## Explicit component type annotations

TS does NOT know `Child` is a React component, it is basically a function that returns JSX
Because it is not a React component, so `Child` doesn't have these properties:

- `propTypes`
- `displayName`
- `defaultProps`
- `contextTypes`

```typescript
interface ChildProps {
  title: string;
}

// TS think Child is not a React component, just a function!
const Child = (props: ChildProps) => {
  return <div>{props.title}</div>;
};

export default Child;
```

To fix it, explicitly use type annotation for React component

```typescript
interface ChildProps {
  title: string;
}

// const Child = (props: ChildProps) => {
//   return <div>{props.title}</div>;
// };

const ChildAsFC: React.FC<ChildProps> = ({ title }) => {
  return <div></div>;
};

export default Child;
```

## Type inference with State

Specify the type for state:

```typescript
const Child = (props: ChildProps) => {
  const [value, setValue] = useState('');
  const [valueList, setValueList] = useState<string[]>([]); // infer the type for state
  ...
};
```

## REDUX - TYPESCRIPT

### Setup Reducer

```typescript
interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface RepoAction {
  type: string;
  payload?: any;
}

const reposReducer = (state: RepoState, action: RepoAction): RepoState => {
  switch (action.type) {
    case 'search_repo':
      return { loading: true, error: null, data: [] };
    case 'search_repo_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_repo_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reposReducer;
```

Look okay? but an enhancement can be made:

- use enum to avoid hard code string
- separate action interface

```typescript
interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface RepoAction {
//   type: string;
//   payload?: any;
// }

interface SearchRepoAction {
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

type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction;

enum ActionType {
  SEARCH_REPO = 'search_repo',
  SEARCH_REPO_SUCCESS = 'search_repo_success',
  SEARCH_REPO_FAILED = 'search_repo_error',
}

// const reposReducer = (state: RepoState, action: RepoAction): RepoState => {
const reposReducer = (state: RepoState, action: Action): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPO_FAILED:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reposReducer;
```

### Setup Action Creator

```typescript
import axios from 'axios';
import { ActionType } from '../action-types';

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: term,
          },
        },
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPO_FAILED,
          payload: error.message,
        });
      }
    }
  };
};
```

Looking pretty good, but... something can be improved:

- in the code above, we can `dispatch()` anything because, dispatch is type of `any` which should be avoided!

```typescript
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  //   return async (dispatch: any) => {
  return async (dispatch: Dispatch<Action>) => {
    ...
  };
};
```

### Setup store

```typescript
// In reducers
const reducers = combineReducers({
  repositories: reposReducer,
});

export default reducers;

// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
```

### Create hooks for dispatch action and consume state

```typescript
// ./useAction.ts
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

// ./useTypedSelector.ts
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
```

and... use it:

```typescript
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Child: React.FC = () => {
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories,
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  ...
};
```
