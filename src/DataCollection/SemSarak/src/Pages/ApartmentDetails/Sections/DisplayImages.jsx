import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchDataContext } from "../../../context/FetchDataContext";
import ImageModal from "../../../components/ImageModal";
import Header from "../../../components/Header/Header";

const DisplayImages = () => {
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const { getApartmentDataById } = useFetchDataContext();

  const [Images, setImages] = useState([]);
  const [Cover, setCover] = useState();
  const [NoData, setNoData] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApartmentDataById(id);
        console.log("data from ApartmentDetails: ", data);
        if (data === undefined) {
          setNoData(true);
        }

        setApartmentData(data);

        setImages(data?.Images);
        setCover(data?.CoverImage);

      } catch (error) {
        console.error("Error fetching apartment data:", error);
        setNoData(true);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // const ImageModal = ({ src, alt, imageClass = "" }) => {

  return (
    <>
      {" "}
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4 mt-14 text-center">{apartmentData?.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ImageModal
            src={Cover}
            alt="Cover Image"
            imageClass="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          {Images.map((image, index) => {
            return (
              <div key={index} className="relative">
                <ImageModal
                  src={image}
                  alt={`Image ${index + 1}`}
                  imageClass="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayImages;
