import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    filter: '',
  };

  onSearchBtn = inputValue => {
    if (inputValue === '') {
      toast('Введите ваш запрос');
      return;
    }
    this.setState({ filter: inputValue });
  };

  render() {
    const { filter } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearchBtn} />
        {filter && <ImageGallery filter={filter} />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
