import React, { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import { useApartmentContext } from "../../../context/ApartmentContext";
import { db, storage } from "../../../Firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../../context/AuthContext";
import { set } from "react-hook-form";

const UploadImages = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [coverLoading, setCoverLoading] = useState(false);
  const [additionalLoading, setAdditionalLoading] = useState(0);
  const { getUserId, getUserEmail } = useAuth();
  const { addCoverImage, addImages, getCoverImage, getImages } =
    useApartmentContext();

  const Texts = {
    title: "رفع الصور",
    description: "يمكنك رفع صور للشقة لتظهر بشكل أفضل",
  };

  useEffect(() => {
    const folderName = getUserEmail();
    console.log(folderName);
  }, [getUserEmail]);

  // Function to handle cover image changes
const handleCoverImageChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // console.log("Uploading file:", file); // Check the file properties

  setCoverLoading(true);
  const uniqueFileName = `CoverImage_${Date.now()}_${file.name}`; // Ensure unique name
  const storageRef = ref(
    storage,
    `apartments/images/${getUserEmail()}/${uniqueFileName}`
  );

  try {
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    setCoverImage(url);
    addCoverImage(url);
    console.log("File uploaded successfully. Download URL:", url);
  } catch (error) {
    console.error("Error uploading file:", error.message);
    console.log(error); // Log detailed error
  } finally {
    setCoverLoading(false);
  }
};
  // Function to handle additional images changes
  const handleAdditionalImagesChange = async (event) => {
    const files = Array.from(event.target.files);

    // Create object URLs for preview
    const newImages = files.map((file) => URL.createObjectURL(file));
    setAdditionalImages(newImages);

    // Upload each image to Firebase
    const uploadPromises = files.map(async (file) => {
      const storageRef = ref(
        storage,
        `apartments/images/${getUserEmail()}/${"PostImages_" + file.name}`
      );
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        console.log("Upload complete for:", file.name);
        return url;
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    });

    // Wait for all uploads to complete
    const urls = await Promise.all(uploadPromises);
    addImages(urls.filter((url) => url)); // Add only valid URLs
    console.log("All images uploaded successfully. Download URLs:", urls);
  };

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (coverImage) URL.revokeObjectURL(coverImage);
      additionalImages.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [coverImage, additionalImages]);

  useEffect(() => {
    try {
      const coverImage = getCoverImage();
      const images = getImages();
      setCoverImage(coverImage);
      setAdditionalImages(images);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }, [getCoverImage, getImages]);

  return (
    <div className="container mx-auto p-6 text-right mb-32 fadeInAnmation">
      <div className="w-full max-w-[700px] mx-auto bg-white p-6">
        <h1 className="text-3xl font-bold mb-4">{Texts.title}</h1>
        <p className="text-gray-600 mb-8">{Texts.description}</p>

        {/* Cover Image Input */}
        <div className="flex flex-col gap-4 fadeInAnmation">
          <ImageUpload
            id="coverImage"
            label="صورة الغلاف"
            onChange={handleCoverImageChange}
          />
          {coverImage && (
            <img
              src={coverImage}
              alt="Cover Preview"
              className="mt-2 w-full h-auto border rounded"
            />
          )}
        </div>

        {/* Additional Images Input */}
        <div className="flex flex-col gap-4 mt-6 fadeInAnmation">
          <ImageUpload
            id="additionalImages"
            label="صور اضافية"
            onChange={handleAdditionalImagesChange}
          />
        </div>

        {/* Grid Display for Additional Images */}
        <div className="grid grid-cols-5 gap-4 mt-6 fadeInAnmation">
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
