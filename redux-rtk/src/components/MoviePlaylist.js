import { useDispatch, useSelector } from 'react-redux';
import { createRandomMovie } from '../data';
import { addMovie, removeMovie } from '../store';

const MoviePlaylist = () => {
  const dispatch = useDispatch();

  const moviePlaylist = useSelector((state) => {
    return state.movie;
  });

  const handleAddMovie = (movie) => {
    dispatch(addMovie(movie));
  };
  const handleRemoveMovie = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleRemoveMovie(movie)}
          className="h-5 w-5 ml-2 text-white bg-red-500"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="p-4">
      <div>
        <h3 className="pl-4 text-xl font-bold">Movie Playlist</h3>
        <div>
          <button
            onClick={() => handleAddMovie(createRandomMovie())}
            className="p-5 m-4 rounded-lg bg-green-400"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
};

export default MoviePlaylist;
