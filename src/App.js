import React, { Component } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'

class App extends Component {
  state = {
    filter: '',
  }

  onSearchBtn = (filter) => {
    this.setState({ filter })
    console.log(this.state)
    console.log(filter)
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearchBtn} />
      </div>
    )
  }
}

export default App
