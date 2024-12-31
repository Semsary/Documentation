// Inside FetchDataProvider
import { createContext, useContext, useEffect, useState } from "react";
import { useFirebase } from "../Firebase/useFirebase";

const FetchDataContext = createContext();

const FetchDataProvider = ({ children }) => {
  const [displayData, setDisplayData] = useState([]);
  const [displayCardsData, setDisplayCardsData] = useState([]);
  const { GetAppartements, GetAppartementById } = useFirebase();
  const [apartmentData, setApartmentData] = useState(null); // State to store fetched data

  const [commentUpdated, setCommentUpdated] = useState(null);
  const Addcomment = () => {
    setCommentUpdated(Math.random())
  }
  const ApartmentCardsData = async () => {
    const data = await GetAppartements();
    const RundomArray = data
      .map((apartment) => ({ apartment, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ apartment }) => apartment)
      .filter((apartment) => apartment.display);

    //console.log("data from FetchDataProvider: ", RundomArray.length);
    setDisplayCardsData(
      RundomArray.map((apartment) => {
        return {
          id: apartment.id,
          name: apartment.name,
          description: apartment.description,
          bathroom: apartment.ApartmentInfo.bathrooms,
          bedroom: apartment.ApartmentInfo.bedrooms,
          beds: apartment.ApartmentInfo.beds,
          coverImage: apartment.CoverImage,
          locationArea: apartment.Location.area,
          locationCity: apartment.Location.city,
          price: apartment.Price.price,
          acUnits: apartment.ApartmentInfo.acUnits,
          badge: apartment.Badge,
        };
      })
    );
  };

  useEffect(() => {
    ApartmentCardsData(); // Fetch data when the provider loads
  }, []);

  // Fetch of id
  const getApartmentDataById = async (id) => {
    return TempApartmentDataById(id);
  };

  const TempApartmentDataById = async (id) => {
    const data = await GetAppartementById(id);
    if(data.display === true){
      // console.log("data from FetchDataProvider: ", data.display);
      setApartmentData(data);
      return data;
    }
    // console.log("data from FetchDataProvider: ", data.display);
    // setApartmentData(data);
    // return data;
  };

  return (
    <FetchDataContext.Provider
      value={{
        displayData,
        displayCardsData,
        getApartmentDataById,
        commentUpdated,
        Addcomment,
      }}
    >
      {children}
    </FetchDataContext.Provider>
  );
};

export default FetchDataProvider;

export const useFetchDataContext = () => {
  return useContext(FetchDataContext);
};
