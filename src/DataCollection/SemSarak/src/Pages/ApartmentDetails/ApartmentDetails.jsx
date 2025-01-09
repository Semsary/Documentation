import React, { useEffect, useState, Suspense } from "react";
import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import { useFetchDataContext } from "../../context/FetchDataContext";
import LoadingFallback from "../../components/LoadingFallback";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../Firebase/Firebase";

// Lazy load the sections
const ImageSection = React.lazy(() => import("./Sections/ImageSection"));
const Services = React.lazy(() => import("./Sections/Services"));
const NoDataPage = React.lazy(() => import("./Sections/NoDataPage"));

const NameSection = React.lazy(() => import("./Sections/NameSection"));
const ApartmentInfoSection = React.lazy(() =>
  import("./Sections/ApartmentInfoSection")
);
const LocationInfoSection = React.lazy(() =>
  import("./Sections/LocationInfoSection")
);
const AreaServices = React.lazy(() => import("./Sections/AreaServices"));
const ServicesPrice = React.lazy(() => import("./Sections/ServicesPrice"));
const PriceDetails = React.lazy(() => import("./Sections/PriceDetails"));
const AddRatingComponent = React.lazy(() =>
  import("./Sections/AddRatingComponent")
);
const RatingComponent = React.lazy(() => import("./Sections/RatingComponent"));

const ApartmentDetails = () => {
  const { id } = useParams();
  const { getApartmentDataById } = useFetchDataContext();
  const [apartmentData, setApartmentData] = useState(null);
  const [NoData, setNoData] = useState(false);

    useEffect(() => {
      logEvent(analytics, `Apartment_view_${id}`);
    }, [id]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApartmentDataById(id);
        // console.log("data from ApartmentDetails: ", data);
        if (data === undefined) {
          setNoData(true);
        }

        setApartmentData(data);
      } catch (error) {
        console.error("Error fetching apartment data:", error);
        setNoData(true);
        // alert("Error fetching apartment data");
      }
      // console.log("data from NoData : ", NoData);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const [comments, setComments] = useState([]);

  // Function to add a new rating/comment
  const handleAddRating = (newRating) => {
    // Update the comments list with the new rating
    setComments((prevComments) => [...prevComments, newRating]);
  };

  // update the compnent when NoData change
  useEffect(() => {
    // console.log("data from NoData : ", NoData);
  }, [NoData]);

  return (
    <>
      <Header />
      {NoData ? (
        <NoDataPage />
      ) : (
        <div className="py-24 px-1 sm:px-10 md:px-10 lg:px-32 xl:px-40 2xl:px-52">
          {apartmentData && (
            <>
              <Suspense fallback={<LoadingFallback />}>
                <ImageSection
                  cover={apartmentData?.CoverImage || ""}
                  images={apartmentData?.Images || ""}
                />
              </Suspense>

              <Link to={`/images/${id}`} className=" w-full">
                <button className="bg-mainColor hover:bg-mainColorHover text-white w-48 font-bold py-2 px-4 rounded-full mr-16">
                  معرض الصور
                </button>
              </Link>
              <Suspense fallback={<LoadingFallback />}>
                <NameSection
                  name={apartmentData.name}
                  description={apartmentData.description}
                  prise={apartmentData.Price.price}
                />
              </Suspense>

              <hr />
              <Suspense fallback={<LoadingFallback />}>
                <Services data={apartmentData?.Servicses || ["", ""]} />
              </Suspense>
              <hr />
              <Suspense fallback={<LoadingFallback />}>
                <ApartmentInfoSection data={apartmentData.ApartmentInfo} />
              </Suspense>
              <hr />
              <Suspense fallback={<LoadingFallback />}>
                <LocationInfoSection locationData={apartmentData.Location} />
              </Suspense>
              <hr />
              <Suspense fallback={<LoadingFallback />}>
                <AreaServices data={apartmentData.AreaServices} />
              </Suspense>
              <hr />
              <div className="flex flex-col md:flex-row mx-auto gap-10 my-10">
                <Suspense fallback={<LoadingFallback />}>
                  <ServicesPrice data={apartmentData.ServicesPrice} />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <PriceDetails data={apartmentData.Price} />
                </Suspense>
              </div>
              <hr />
              <Suspense fallback={<LoadingFallback />}>
                <AddRatingComponent id={id} />
              </Suspense>
              <hr />
              <Suspense fallback={<LoadingFallback />}>
                <RatingComponent id={id} comments={comments} />
              </Suspense>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ApartmentDetails;
