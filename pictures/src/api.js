import axios from 'axios';

const searchImages = async (term) => {
  return await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 0BFha12kb0BYhMpN-l-J2Uv-fMKos_5W3xM03GxWiOM',
    },
    params: {
      query: term,
    },
  });
};

export default searchImages;
