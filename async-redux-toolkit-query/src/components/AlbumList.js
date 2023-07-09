import { useFetchAlbumsQuery, useAddAlbumsMutation } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum] = useAddAlbumsMutation();

  let content;
  if (isLoading) {
    content = <Skeleton className="w-full h-10" times={3} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => {
      return <div key={album.id}>{album.title}</div>;
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div className="mb-5">
      <div className="bg-rose-200 p-1 flex items-center justify-between">
        Albums for {user.name}
        <Button
          className="bg-rose-800 border-none"
          primary
          onClick={handleAddAlbum}
        >
          Add Album
        </Button>
      </div>

      {content}
    </div>
  );
};

export default AlbumList;
