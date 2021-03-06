import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    filter: '',
  };

  onSearchBtn = filter => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearchBtn} />
        {filter.length > 0 && <ImageGallery filter={filter} />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
