import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img src={src} alt={alt} width="1024" height="768" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  closeModal: PropTypes.func,
};
