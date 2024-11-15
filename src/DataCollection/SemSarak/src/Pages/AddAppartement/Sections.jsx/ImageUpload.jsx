const ImageUpload = ({ id, label, onChange }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      {/* Hidden file input */}
      <input
        type="file"
        id={id}
        className="hidden"
        accept="image/*" // Allow only image files
        multiple // Allow multiple file selections for additional images
        onChange={onChange} // Pass the change event handler
      />
      {/* Custom label that acts as a file input button */}
      <label
        htmlFor={id}
        className="flex items-center justify-center px-5 py-2 border-2 border-dashed border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
      >
        <span>اضــف</span> {/* Text for selecting additional images */}
        <svg
          className="w-5 h-5 ml-2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </label>
    </>
  );
};

export default ImageUpload;
