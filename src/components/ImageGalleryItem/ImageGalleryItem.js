import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, name, id }) => {
  return (
    <li key={id} className={s.item}>
      <img src={url} alt={name} className={s.image} loading="lazy" />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.number,
};
