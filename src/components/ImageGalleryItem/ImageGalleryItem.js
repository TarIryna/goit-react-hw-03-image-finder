import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt, index, onClick }) => {
  return (
    <>
      <li className={s.item} onClick={() => onClick(index)} key={index}>
        <img src={url} alt={alt} className={s.image} loading="lazy" />
      </li>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};
