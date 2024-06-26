import s from './ImageCard.module.css';
export const ImageCard = ({
  urls,
  alt_description,
  width,
  height,
  onClick,
}) => {
  return (
    <div
      {...(width / height > 1
        ? { className: s.landscapeDiv }
        : { className: s.portraitDiv })}
    >
      <img
        className={s.imageGallery}
        src={urls.small}
        alt={alt_description}
        onClick={() => onClick(urls.regular)}
      />
    </div>
  );
};
