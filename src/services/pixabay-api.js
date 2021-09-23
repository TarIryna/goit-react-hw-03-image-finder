const KEY = '22441039-e3c3a22ef42346706974d6393';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

const fetchPhotoes = (query, page = 1) => {
  const searchParams = new URLSearchParams({
    q: query,
    page,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  });

  return fetch(`${BASE_URL}?${searchParams.toString()}`).then(response => {
    if (!response.ok) {
      return Promise.rejected(new Error('Oops, something went wrong!'));
    }
    return response.json();
  });
};

const api = {
  fetchPhotoes,
};

export default api;
