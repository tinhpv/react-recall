# Redux

## Components

### Action

Describe intention to change state of the app.

```javascript
// Action creator will return an action objects
// No need to manually create action object
{
  type: 'music/addSong';
  payload: 'New song';
}
```

### Reducers

It is a pure function, specify how the state should be change in response to dispatched action

```javascript
// 3 reducers to add/remove/reset movies
{
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    reset(state, action) {
      return [];
    },
},
```

### Slices

1. Define some initial state
2. combine all reducers into a big reducer
3. create set of 'action creator' functions

```javascript
const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    reset(state, action) {
      return [];
    },
  },
});

// EXPORT ACTION FROM SLICE'S ACTION CREATOR
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
// IF NOT, HAVE TO WRITE MANALLY
store.dispatch({
  type: 'movie/addMovie',
  payload: "new movie's name",
});
```

### Store

served as centralized container holding the app's state.

- dispatching actions to reducers
- applying reducers' logic to update state
- notify any subscriber about state changes

### Usage

```javascript
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from './store';

const Component = () => {
  // get the dispatch function
  const dispatch = useDispatch();

  // useSelector to access state
  const moviePlaylist = useSelector((state) => {
    return state.movie;
  });

  const updateState = () => {
    dispatch(addMovie);
  };

  return <div></div>;
};
```

### Watching other actions

Context:

- There's a button on the page to reset the state:

  - reset list of movie
  - reset list of music songs

- Reducers' in a slice just only know theirs state (a part of ultimate state of the app). moviesSlice just know about movie, and the other just knows about music.

_Problem_: One single action to update 2 piece of states from 2 slices. ❌ We can't call `dispatch()` line by line because when calling `dispatch()`, it is sent action to every reducer in the store.

One of the solution is to let one slice also watch for another specified action type:

> Add extra reducer let music slice also watch on movie reset action type

```javascript
const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    ...
    reset(state, action) {
      return [];
    },
  },
});


const musicSlice = createSlice({
  name: 'aaron',
  initialState: [],
  reducers: {
    ...
  },
  // We want music reducer to watch for 'movie/reset' as well
  extraReducers(builder) {
    builder.addCase(moviesSlice.actions.reset.toString(), (state, action) => {
      return [];
    });
  },
});
```

### Another way... CREATE MANUAL ACTION

Watching other actions is not good, since it is dependent on the other
if that action is renamed or being removed, the slice is not working right away.

_Solution:_ Create a new standalone reset action to get both slices to watch it
using `createAction()` of `redux-toolkit`

Create an action and make both slices watch at action when it being dispatched

```javascript
const reset = createAction('app/reset')

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    ...
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

const musicSlice = createSlice({
  name: 'aaron',
  initialState: [],
  reducers: {
    ...
  },
  // We want music reducer to watch for 'movie/reset' as well
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});
```
