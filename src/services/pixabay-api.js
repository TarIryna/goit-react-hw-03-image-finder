import axios from 'axios';

function fetchPhotoes(page, perPage, query) {
  console.log(query);
  const params = {
    key: '22723314-dcec60eea06497913e1a2cdb4',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  };

  const URL = 'https://pixabay.com/api/';
  return axios.get(URL, { params }).then(responce => responce.data);
}
// this.state.page > 1
//   ? this.setState(prevState => ({ photoes: [...prevState.photoes, ...data.hits] }))
//   : this.setState({ photoes: data.hits });
// this.setState({ totalHits: data.totalHits });
// this.setState(prevState => ({ page: prevState.page + 1 }));
export default fetchPhotoes;
