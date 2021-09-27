import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Loader from 'react-loader-spinner';
import Modal from '../Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { toast } from 'react-toastify';
import s from './ImageGallery.module.css';
import api from '../../services/pixabay-api';

class ImageGallery extends Component {
  state = {
    page: null,
    photoes: [],
    totalHits: null,
    status: 'idle',
    filter: '',
    index: null,
    showModal: true,
  };

  componentDidMount() {
    this.setState({ filter: this.props.filter, page: 1, index: null, showModal: false });
    this.getPhotoes();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevFilter = prevProps.filter;
    const newFilter = this.props.filter;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevFilter !== newFilter) {
      this.setState(() => {
        return { page: 1, filter: newFilter, status: 'pending', photoes: [] };
      });
      setTimeout(() => {
        this.getPhotoes(newFilter, 1);
        this.scroll();
      }, 300);
    }

    if (prevPage < newPage) {
      this.setState({ status: 'pending' }, () => this.getPhotoes());
    }
  }

  getPhotoes() {
    const { page, filter } = this.state;
    api
      .fetchPhotoes(filter, page)
      .then(({ hits, totalHits }) => {
        this.setState({ status: 'resolved', totalHits });
        if (page > 1) {
          this.setState(prevState => ({ photoes: [...prevState.photoes, ...hits] }));
        }
        if (page === 1) {
          this.setState({ photoes: hits });
        }
      })
      .catch(() => this.setState({ status: 'rejected' }))
      .finally(() => this.scroll());
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, index: null });
  };
  setImage = index => {
    this.setState({ index });
    this.openModal();
  };

  scroll = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  };

  render() {
    const { photoes, totalHits, status, index, showModal } = this.state;
    const isNotLast = Number(totalHits) !== photoes.length ? true : false;
    if (status === 'idle') {
      return (
        <div>
          <p>Загружаем...</p>
        </div>
      );
    }

    if (status === 'rejected') {
      return toast.error('Ваш запрос не найден');
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={s.gallery}>
            {photoes.map(({ webformatURL, tags }, index) => (
              <ImageGalleryItem
                url={webformatURL}
                alt={tags}
                index={index}
                onClick={this.setImage}
              />
            ))}
          </ul>
          {isNotLast && <Button onClick={this.onLoadMore} />}
          {showModal && (
            <Modal
              src={photoes[index].largeImageURL}
              alt={photoes[index].tags}
              onClick={this.openModal}
              onClose={this.closeModal}
            />
          )}
        </>
      );
    }
    if (status === 'pending') {
      return <Loader type="Circles" color="#00BFFF" height={80} width={80} />;
    }
  }
}

ImageGallery.propTypes = {
  filter: PropTypes.string,
};

export default ImageGallery;
