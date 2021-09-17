import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import axios from 'axios';

class App extends Component {
  state = {
    filter: 'cat',
    page: 1,
    photoes: [
      { id: '01', tags: 'cat-1', webformatURL: 'https://i.ibb.co/QXSx4TG/212506-1.jpg' },
      { id: '02', tags: 'cat-2', webformatURL: 'https://i.ibb.co/7VQWypf/213547-4.jpg' },
      { id: '03', tags: 'cat-3', webformatURL: 'https://i.ibb.co/9cjhDvt/213546-4.jpg' },
    ],
  };

  componentDidMount() {
    console.log('did mount');
  }

  async getPhotoes() {
    const params = {
      key: '22723314-dcec60eea06497913e1a2cdb4',
      q: this.state.filter,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    };
    const URL = 'https://pixabay.com/api/';
    const data = await axios.get(URL, { params }).then(responce => responce.data);
    console.log(data.hits);
    this.setState({ photoes: data.hits });
    console.log(this.state);
  }

  onSearchBtn = inputValue => {
    this.setState({ filter: inputValue });
    console.log('inputValue');
    console.log(inputValue);
    console.log('this.state.filter arter setstate');
    console.log(this.state.filter);
    this.getPhotoes();
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearchBtn} />
        {this.state.photoes && <ImageGallery photoes={this.state.photoes} />}
      </div>
    );
  }
}

export default App;
