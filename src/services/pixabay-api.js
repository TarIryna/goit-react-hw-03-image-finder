import axios from 'axios';

function fetchPhotoes(page, query) {
  const params = {
    key: '22723314-dcec60eea06497913e1a2cdb4',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  };

  const URL = 'https://pixabay.com/api/';
  return axios.get(URL, { params }).then(responce => responce.data);
}
const api = {
  fetchPhotoes,
};
export default api;
