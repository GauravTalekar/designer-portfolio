import MasonaryItem from "./masonry-item";

const ImageList = ({ images }) => {
  // Function to shuffle the array and pick the first 6 items
  const getRandomImages = (images, count) => {
    const shuffled = images.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Get the first 'count' items
  };

  // Get 6 random images
  const randomImages = getRandomImages(images, 6);

  return (
    <>
      {randomImages.map((img, idx) => (
        <MasonaryItem key={idx} img={img} />
      ))}
    </>
  );
}

export default ImageList