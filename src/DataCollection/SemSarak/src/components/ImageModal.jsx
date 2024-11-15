import { useState } from "react";

// ImageModal component for displaying the full-size image in a modal
const ImageModal = ({ src, alt, imageClass = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Close the modal
  };

  return (
    <div>
      {/* Thumbnail image */}
      <img
        className={`h-auto max-w-full cursor-pointer transition-transform transform hover:scale-105 duration-300 ${imageClass}`}
        src={src}
        alt={alt}
        onClick={handleImageClick} // Open the modal when clicked
      />

      {/* Modal to show the full-size image */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex items-center justify-center z-50 opacity-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isOpen ? 1 : 0 }}
          onClick={handleCloseModal} // Close the modal when clicked outside
        >
          <div
            className="relative max-w-full max-h-screen overflow-auto bg-white p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              className={`max-w-full max-h-screen object-contain ${imageClass}`}
              src={src}
              alt={alt}
            />
            <button
              className="absolute top-2 right-2 p-2 text-white bg-black rounded-full hover:bg-gray-700 transition-colors duration-300"
              onClick={handleCloseModal} // Close the modal when clicking 'X'
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
