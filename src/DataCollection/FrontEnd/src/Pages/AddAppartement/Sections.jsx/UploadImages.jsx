import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

const UploadImages = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const Texts = {
    title: "رفع الصور",
    description: "يمكنك رفع صور للشقة لتظهر بشكل أفضل",
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const handleAdditionalImagesChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setAdditionalImages(newImages);
  };

  return (
    <div className="container mx-auto p-6 text-right mb-32">
      <div className="w-full max-w-[700px] mx-auto bg-white p-6">
        <h1 className="text-3xl font-bold mb-4">{Texts.title}</h1>
        <p className="text-gray-600 mb-8">{Texts.description}</p>

        {/* Cover Image Input */}
        <div className="flex flex-col gap-4">
          <ImageUpload id="coverImage" label="صورة الغلاف" onChange={handleCoverImageChange} />

          {coverImage && (
            <img
              src={coverImage}
              alt="Cover Preview"
              className="mt-2 w-full h-auto border rounded"
            />
          )}
        </div>

        {/* Additional Images Input */}
        <div className="flex flex-col gap-4 mt-6">
          <ImageUpload
            id="additionalImages"
            label="صور اضافية"
            onChange={handleAdditionalImagesChange}
          />
        </div>

        {/* Grid Display for Additional Images */}
        <div className="grid grid-cols-5 gap-4 mt-6">
          {additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Additional Preview ${index + 1}`}
              className="w-full h-auto border rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadImages;
