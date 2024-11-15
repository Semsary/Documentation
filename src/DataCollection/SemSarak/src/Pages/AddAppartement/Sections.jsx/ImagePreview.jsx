
const ImagePreview = ({ image }) => {
  return image && <img src={image} alt="Preview" className="mt-2 w-full h-auto border rounded" />;
};

export default ImagePreview;
