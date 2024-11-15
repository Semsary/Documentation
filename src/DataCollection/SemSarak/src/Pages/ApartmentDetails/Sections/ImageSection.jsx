import ImageCarousel from "../../../components/ImageCarousel";

const ImageSection = ({ images, cover }) => {
  // console.log("Images: ", images);

  return (
    <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8">
        {/* Main carousel */}
        <div className="sm:col-span-9 w-full">
          <ImageCarousel images={images} />
        </div>

        {/* Thumbnail images */}
        <div
          className={`sm:col-span-3  grid gap-1
            ${
              images.length < 4
                ? "grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1"
                : images.length < 7
                ? "grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            }
          `}
        >
          {images.slice(0, 6).map((img, index) => (
            <img
              key={index}
              src={img}
              loading="lazy"
              alt={`Apartment ${index + 1}`}
              className="w-full h-24 sm:h-28 md:h-28 lg:h-36 xl:h-36 object-cover cursor-pointer rounded-lg border border-gray-300 hover:border-blue-500 transition-transform transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
