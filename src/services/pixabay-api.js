import axios from 'axios';

const KEY = '22441039-e3c3a22ef42346706974d6393';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
const fetchPhotoes = async (query, page) => {
  return await axios
    .get('', {
      params: {
        q: query,
        page,
      },
    })
    .then(responce => responce.data);
};

const api = {
  fetchPhotoes,
};

export default api;
