import Image from "next/image";
import ImageGalleryControls from "./image-gallery-controls";

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryControls>
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-96 h-96 relative scroll-snap-align-center"
          role="group"
          aria-labelledby={`image-${index}`}
        >
          <Image
            src={image.src}
            alt={image.alt || "Gallery Image"} // Ensure alt text is dynamic
            className="rounded-lg"
            title={image.alt ? `This is an image of ${image.alt}` : "Image"}
            fill
            sizes="(max-width: 768px) 100vw"
            loading="lazy"
            role="img"
          />
          <div id={`image-${index}`} className="sr-only">
            {image.description ? image.description : image.alt}
          </div>
        </div>
      ))}
    </ImageGalleryControls>
  );
};

export default ImageGallery;
