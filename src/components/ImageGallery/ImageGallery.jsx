import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onClick }) {
  return (
    <>
      <ul className={css.gallery}>
        {items.map(item => (
          <li className={css.item} key={item.id}>
            <ImageCard {...item} onClick={onClick} />
          </li>
        ))}
      </ul>
    </>
  );
}
