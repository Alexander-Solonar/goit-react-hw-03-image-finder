import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async name => {
  const response = await axios.get(
    `/?&page=1&key=34154048-696478ee83ae53950cc89dadb&image_type=photo&orientation=horizontal&per_page=12&q=${name}`
  );
  return response.data.hits;
};
