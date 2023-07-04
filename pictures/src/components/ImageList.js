import ImageShow from './ImageShow';

const ImageList = ({ list }) => {
  const renderedImages = list.map((image) => {
    return (
      <div key={image.id}>
        <ImageShow url={image.urls.regular} alt={image.alt_description} />
      </div>
    );
  });

  return <div>{renderedImages}</div>;
};

export default ImageList;
