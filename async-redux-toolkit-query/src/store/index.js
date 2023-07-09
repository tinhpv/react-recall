import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { albumApi } from './apis/albumApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // albums: albumApi.reducer, <<<< ⛔️ this 'albums' here must match with reducer path, could be typo
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchAlbumsQuery, useAddAlbumsMutation } from './apis/albumApi';
