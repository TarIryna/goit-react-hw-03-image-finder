import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = { inputValue: '' };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  onChangeInput = e => {
    this.setState({ inputValue: e.currentTarget.value.trim() });
  };

  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.inputValue) {
      this.props.onSubmit(this.state.inputValue);
      this.reset();
    }
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.onSubmitForm}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
