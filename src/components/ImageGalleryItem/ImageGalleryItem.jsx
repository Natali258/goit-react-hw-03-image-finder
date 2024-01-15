import { Modal } from 'components/Modal/Modal';
import React from 'react';
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <>
        <li className={s.galleryItem} onClick={this.toggleModal}>
          <img src={webformatURL} alt={tags} className={s.galleryImg} />
        </li>
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            onCloseModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}


