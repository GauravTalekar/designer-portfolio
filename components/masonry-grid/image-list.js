import MasonaryItem from "./masonry-item";

const ImageList = ({ images }) => {
  return (
    <>
      {images.map((img, idx) => (
        <MasonaryItem key={idx} img={img} />
      ))}
    </>
  );
}

export default ImageList