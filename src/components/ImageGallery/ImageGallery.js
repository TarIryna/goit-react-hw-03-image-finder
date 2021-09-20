import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
// import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { toast } from 'react-toastify';
import s from './ImageGallery.module.css';
import fetchPhotoes from '../../services/pixabay-api';

class ImageGallery extends Component {
  state = {
    page: 1,
    photoes: null,
    perPage: 12,
    totalHits: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps) {
    const prevFilter = prevProps.filter;
    const newFilter = this.props.filter;
    console.log(prevFilter, ' и новый ', newFilter);
    if (prevFilter !== newFilter) {
      this.setState({ perPage: 12, status: 'pending' });
      fetchPhotoes(1, this.state.perPage, newFilter)
        .then(({ hits, totalHits }) => {
          this.setState({ photoes: hits, status: 'resolved', totalHits });
        })
        .catch(() => this.setState({ status: 'rejected' }));
    }
  }
  onLoadMore = () => {
    this.setState(prevState => ({ perPage: prevState.perPage + 12 }));
  };

  render() {
    const { photoes, perPage, totalHits, status } = this.state;
    console.log(Number(totalHits) >= Number(perPage) || status === 'resolved');

    if (status === 'idle') {
      return toast('Введите ваш запрос!');
    }
    if (status === 'pending') {
      return <Loader type="Circles" color="#00BFFF" height={80} width={80} />;
    }
    if (status === 'rejected') {
      return toast.error('Ваш запрос не найден');
    }
    if (status === 'resolved') {
      return (
        <ul className={s.gallery}>
          {photoes.map(({ webformatURL, id, tags }) => (
            <ImageGalleryItem url={webformatURL} name={tags} id={id} />
          ))}
        </ul>
      );
    }
    if (Number(totalHits) >= Number(perPage) || status === 'resolved') {
      return <Button onClick={this.onLoadMore} />;
    }
  }
}

ImageGallery.propTypes = {
  filter: PropTypes.string,
  perPage: PropTypes.number,
  page: PropTypes.number,
  totalHits: PropTypes.number,
  photoes: PropTypes.array,
};

export default ImageGallery;
