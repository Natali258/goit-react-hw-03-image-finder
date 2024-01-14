import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ galleryImgs }) => {
  return (
    <div className="gallery">
      <ul className={s.galleryList}>
        {galleryImgs.map(({ id, tags, webformatURL }) => (
          <ImageGalleryItem key={id} tags={tags} webformatURL={webformatURL} />
        ))}
      </ul>
    </div>
  );
};
