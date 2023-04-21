import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?&key=34154048-696478ee83ae53950cc89dadb&&image_type=photo&orientation=horizontal&per_page=12&';

export const fetchPictures = async (name, page) => {
  const response = await axios.get(`&page=${page}&q=${name}`);
  return response.data.hits;
};
