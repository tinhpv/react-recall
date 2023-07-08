import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';

export const reset = createAction('app/reset');

//------------ MOVIE SLICE -----------//
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
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

//------------ MUSIC SLICE -----------//
const musicSlice = createSlice({
  name: 'aaron',
  initialState: [],
  reducers: {
    // to call this function:
    // dispatch the action with type: `name` + `/` + `function name`
    // but don't need to remember the pattern since we have 'action create'
    addSong(state, action) {
      // state here is not the ultimate state of the app
      // it's a part of the big state that reducer manages
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  // We want music reducer to watch for 'movie/reset' as well
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

//------------ STORE ------------//
const store = configureStore({
  reducer: {
    music: musicSlice.reducer,
    movie: moviesSlice.reducer,
  },
});

// store.dispatch({
//   type: 'aaron/addSong',
//   payload: 'New song',
// });

// >>> ACTION CREATOR of SLICE
// store.dispatch(musicSlice.actions.addSong('Aaron song - new way to act'));
export { store };
export const { addSong, removeSong } = musicSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
