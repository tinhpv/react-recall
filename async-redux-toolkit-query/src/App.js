// import UserList from './components/UserList';

import AlbumList from './components/AlbumList';

const App = () => {
  return (
    <div className="container mx-auto">
      <AlbumList user={{ id: 1, name: 'Aaron' }} />
      <hr />
      <AlbumList user={{ id: 2, name: 'Emily' }} />
    </div>
  );
};

export default App;
