import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    let response = await searchImages(term);
    setImages(response.data.results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList list={images} />
    </div>
  );
}

export default App;
