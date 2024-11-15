import { useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  return (
    
    <div className="relative max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentImage]}
          loading="lazy"
          alt={`Slide ${currentImage + 1}`}
          className="w-full md:h-[450px] min-h-[250px]  max-w-full h-auto object-cover transition-transform duration-500 ease-in-out transform"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        &#62;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        &#60;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentImage ? "bg-blue-500" : "bg-gray-300"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
