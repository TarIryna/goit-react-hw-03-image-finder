import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { photoes } = this.props;
    return (
      <ul className={s.gallery}>
        {photoes.map(({ webformatURL, id, tags }) => (
          <ImageGalleryItem url={webformatURL} name={tags} id={id} />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  photoes: PropTypes.array.isRequired,
};

export default ImageGallery;
