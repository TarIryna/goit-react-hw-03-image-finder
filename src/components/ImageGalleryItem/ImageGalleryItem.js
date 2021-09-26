import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ webformatURL, tags }, index) => (
        <li className={s.item} onClick={() => onClick(index)} key={index}>
          <img src={webformatURL} alt={tags} className={s.image} loading="lazy" />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};
