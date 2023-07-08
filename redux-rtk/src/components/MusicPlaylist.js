import { useDispatch, useSelector } from 'react-redux';
import { createRandomSong } from '../data';
import { addSong, removeSong } from '../store';

const MusicPlaylist = () => {
  const dispatch = useDispatch();
  const musicList = useSelector((state) => {
    console.log(state);
    return state.music;
  });

  const handleAdd = (song) => {
    dispatch(addSong(song));
  };

  const handleRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = musicList.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleRemove(song)}
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
        <h3 className="pl-4 text-xl font-bold">Song Playlist</h3>
        <button
          onClick={() => handleAdd(createRandomSong())}
          className="p-5 m-4 rounded-lg bg-rose-400"
        >
          + Add Song to Playlist
        </button>
      </div>
      <ul className="pl-4">{renderedSongs}</ul>
    </div>
  );
};

export default MusicPlaylist;
