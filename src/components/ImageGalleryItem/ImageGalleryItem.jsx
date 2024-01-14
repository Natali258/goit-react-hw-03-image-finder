export const ImageGalleryItem = ({ tags, webformatURL }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
