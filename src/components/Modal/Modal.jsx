import React from 'react';
import s from './Modal.module.css';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEscp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscp);
  }

  closeEscp = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  closeBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;

    return (
      <div>
        <div className={s.overlay} onClick={this.closeBackdropClick}>
          <div className={s.modal}>
            <img src={largeImageURL} alt={alt} />
          </div>
        </div>
      </div>
    );
  }
}
