import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import axios from 'axios';

class App extends Component {
  state = {
    filter: '',
    page: 1,
    photoes: null,
    perPage: 12,
  };

  componentDidMount() {
    console.log('did mount');
  }

  componentDidUpdate(prevState) {
    console.log(prevState);
  }

  async getPhotoes(inputValue) {
    const params = {
      key: '22723314-dcec60eea06497913e1a2cdb4',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.state.page,
      per_page: this.state.perPage,
    };
    const URL = 'https://pixabay.com/api/';
    const data = await axios.get(URL, { params }).then(responce => responce.data);
    this.state.photoes
      ? this.setState(prevState => ({ photoes: [...prevState.photoes, ...data.hits] }))
      : this.setState({ photoes: data.hits });
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  onSearchBtn = inputValue => {
    this.setState({ filter: inputValue });
    this.getPhotoes(inputValue);
  };

  onLoadMore = () => {
    this.getPhotoes(this.state.filter);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearchBtn} />
        {this.state.photoes && <ImageGallery photoes={this.state.photoes} />}
        {this.state.photoes && <Button onClick={this.onLoadMore} />}
      </div>
    );
  }
}

export default App;
