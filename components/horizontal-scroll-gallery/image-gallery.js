import Image from "next/image";
import ImageGalleryControls from "./image-gallery-controls";

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryControls>
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-96 h-96 relative scroll-snap-align-center"
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="rounded-lg"
            title={`This is image of ${image.alt}`}
            fill
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      ))}
    </ImageGalleryControls>
  );
};

export default ImageGallery;