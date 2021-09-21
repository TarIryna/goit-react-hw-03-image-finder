import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = { filter: '' };

  onChangeInput = e => {
    const value = e.currentTarget.value.trim();
    this.setState({ filter: value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { filter } = this.state;
    if (filter === '') {
      return toast('Введите ваш запрос');
    }
    this.props.onSubmit(filter);
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
