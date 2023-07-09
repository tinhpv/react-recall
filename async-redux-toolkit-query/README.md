# Async - Redux Toolkit Query

## Tag system - automatic prefetch

```javascript
import { useFetchAlbumsQuery } from '../store';

const AlbumList = ({ user }) => {

  // will trigger the call immediately
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  // .. What if we use the hook again? Does it send 2 same requests?
  // 💡 NO, Only 1 request was made
  useFetchAlbumsQuery(user);
  ...
};
```

How Redux detect there're 2 duplicated request? -> Return the information of the `pending` request, if the current request is identical to that, Redux will omit the request.

### Refetching with TAG

- It is used to mark certain queries as being outdated/stale after specific 'mutation's are executed

```javascript
{
    fetchAlbums: builder.query({
        providesTags: ['Albums'], // define list of tags here for fetching albums
        query: (user) => {
          return {
            ...
          };
        },
      }),
      addAlbums: builder.mutation({
        invalidatesTags: ['Albums'], // every when this api calls done, fetchAlbums will be trigger again
        query: (user) => {
          return {
            ...
          };
        },
      }),
}
```

PROBLEMS... as above example, every `addAlbums` is called, all requests being made previously are called with whatever `user`.
FINE-GRAINED TAG:

```javascript
{
    fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
            return [{type: 'Album', id: user.id}] // add id to make it unique
        },
        query: (user) => {
          return {
            ...
          };
        },
      }),
      addAlbums: builder.mutation({
        invalidatesTags: ['Albums'],
        query: (user) => {
          return {
            ...
          };
        },
      }),
}
```
