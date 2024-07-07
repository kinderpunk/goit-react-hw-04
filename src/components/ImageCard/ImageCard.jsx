import css from './ImageCard.module.css';

export default function ImageCard({
  urls: { small, regular },
  alt_description,
  onClick,
}) {
  return (
    <div>
      <img
        className={css.img}
        src={small}
        width="500"
        alt={alt_description}
        onClick={() => onClick(regular)}
        title="click me!"
      />
    </div>
  );
}
