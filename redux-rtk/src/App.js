import { useDispatch } from 'react-redux';
import MoviePlaylist from './components/MoviePlaylist';
import MusicPlaylist from './components/MusicPlaylist';
import { reset } from './store';

const App = () => {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div>
      <button
        onClick={() => handleResetClick()}
        className="p-5 m-4 rounded-lg bg-orange-600"
      >
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <MusicPlaylist />
    </div>
  );
};

export default App;
