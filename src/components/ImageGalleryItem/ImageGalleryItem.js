import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, name, onClick }) => {
  return (
    <li className={s.item} onClick={onClick}>
      <img src={url} alt={name} className={s.image} loading="lazy" />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
