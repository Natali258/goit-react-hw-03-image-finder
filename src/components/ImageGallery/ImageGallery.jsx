import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ galleryImgs }) => {
  return (
    <div className={s.gallery}>
      <ul className={s.galleryList}>
        {galleryImgs.map(({ id, tags, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
};
