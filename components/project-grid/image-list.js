import MasonaryItem from "./masonary-item";

const ImageList = ({ images }) => {
  return (
    <>
      {images.map((img, idx) => (
        <MasonaryItem key={idx} idx={idx} img={img} />
      ))}
    </>
  );
}

export default ImageList