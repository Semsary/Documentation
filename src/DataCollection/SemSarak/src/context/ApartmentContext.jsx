import { createContext, useContext, useState, useEffect } from "react";
import { useFirebase } from "../Firebase/useFirebase";

const ApartmentContext = createContext();

const ApartmentProvider = ({ children }) => {


  const { AddApartment } = useFirebase();

  const [apartmentData, setApartmentData] = useState(() => {
    const savedData = localStorage.getItem("apartmentData");
    return savedData
      ? JSON.parse(savedData)
      : {
          HomeType: "",
          Location: {
            city: "",
            area: "",
            floor: "",
          },
          ApartmentInfo: {
            beds: 1,
            bedrooms: 1,
            bathrooms: 1,
            acUnits: 1,
            balconies: 1,
            tables: 1,
            chairs: 1,
        },
        AreaServices:
        {
          hospital: false,
          gym: false,
          playground: false,
          school: false,
          university: false,
          supermarket: false,
          restaurant: false,
          parking: false,
          bank: false,
        },

          Price: {
            HomeType: "",
            price: 0,
            semsar: 0,
            guarantee: 0,
          },
          ServicesPrice: {
            water: 0,
            electricity: 0,
            gas: 0,
            internet: 0,
          },
          CoverImage: "",
          Images: [],
          display: false,
          Badge: "None",
          MetaData: "None",
          Servicses: {
            wifi: false,
            tv: false,
            kitchen: false,
            elevator: false,
            ac: false,
            washingMachine: false,
            cooker: false,
            fridge: false,
            heater: false,
            internet: false,
            salon: false,
            diningRoom: false,
          },
        };
  });

  useEffect(() => {
    localStorage.setItem("apartmentData", JSON.stringify(apartmentData));
  }, [apartmentData]);

  const addHomeType = (type) => {
    setApartmentData((prevData) => {
      return { ...prevData, HomeType: type ,display:false};
    });
  };

  const getHomeType = () => {
    return apartmentData.HomeType;
  };

  const addLocation = (city, area, floor) => {
    setApartmentData((prevData) => {
      return { ...prevData, Location: { city, area, floor } };
    });
  };

  const getLocaion = () => {
    return apartmentData.Location;
  };

  const addPrice = (HomeType, price, semsar, guarantee) => {
    setApartmentData((prevData) => {
      return { ...prevData, Price: { HomeType, price, semsar, guarantee } };
    });
  };

  const getPrice = () => {
    return apartmentData.Price;
  };

  const addServicesPrice = (water, electricity, gas, internet) => {
    setApartmentData((prevData) => {
      return {
        ...prevData,
        ServicesPrice: { water, electricity, gas, internet },
      };
    });
  };

  const getServicesPrice = () => {
    return apartmentData.ServicesPrice;
  };



  // check if all apartment data is filled or not 
  const checkApartmentData = () => {
    if (apartmentData.HomeType === "") return "قم بأختيار نوع الشقة";
    if (apartmentData.Location.city === "") return "قم بأختيار المدينة";
    if (apartmentData.Location.area === "") return "قم بأختيار المنطقة";
    if (apartmentData.Location.floor === "") return "قم بأختيار الدور";
    if (apartmentData.Price.price === 0) return "قم بأدخال سعر الشقة";
    if (apartmentData.CoverImage === "") return "قم بأختيار صورة للشقة";
    if (apartmentData.Images.length === 0) return "قم بأختيار صور للشقة";
    if (apartmentData.name === "") return "قم بأدخال اسم الشقة";
    if (apartmentData.description === "") return "قم بأدخال وصف للشقة";
    
    return "true";
  };

  const addUserData = (Uid,  email,time) => {
    setApartmentData((prevData) => {
      return { ...prevData, UserID: Uid,  UserEmail: email ,DateTime: time};
    });
  };


      
      



  const clearApartmentDataFormLocalStorage = () => {
    localStorage.removeItem("apartmentData");
  };


  const addBadge = () => {
    setApartmentData((prevData) => {
      return { ...prevData, Badge: "None",MetaData:"None" };
    });
  };




  const SaveApartementData = () => {
   addBadge();
    console.log("done");


    AddApartment(apartmentData)
      .then(() => {
        // alert("Appartement Added Successfully");
        clearApartmentDataFormLocalStorage();
      })
      .catch((error) => {
        console.error("Error adding apartment: ", error);
      });
  };

  const addServices = (
    wifi,
    tv,
    kitchen,
    elevator,
    ac,
    washingMachine,
    cooker,
    fridge,
    heater,
    internet,
    salon,
    diningRoom

  ) => {
    setApartmentData((prevData) => {
      return {
        ...prevData,
        Servicses: {
          wifi,
          tv,
          kitchen,
          elevator,
          ac,
          washingMachine,
          cooker,
          fridge,
          heater,
          internet,
          salon,
          diningRoom
        },
      };
    });
  };

  const getServices = () => {
    return apartmentData.Servicses;
  };

  const addCoverImage = (image) => {
    setApartmentData((prevData) => {
      return { ...prevData, CoverImage: image };
    });
  };

  const getCoverImage = () => {
    return apartmentData.CoverImage;
  };

  const addImages = (images) => {
    setApartmentData((prevData) => {
      return { ...prevData, Images: images };
    });
  };

  const getImages = () => {
    return apartmentData.Images;
  };

  const addNameDescription = (name, description) => {
    setApartmentData((prevData) => {
      return { ...prevData, name, description };
    });
  };

  const addApartmentInfo = (
    acUnits,
    bedrooms,
    bathrooms,
    beds,
    balconies,
    tables,
    chairs
  ) => {
    //Update with the new value only
    setApartmentData((prevData) => {
      return {
        ...prevData,
        ApartmentInfo: {
          acUnits,
          bedrooms,
          bathrooms,
          beds,
          balconies,
          tables,
          chairs,
        },
      };
    });
  };

  const getApartmentInfo = () => {
    return apartmentData.ApartmentInfo;
  };

  

  const addAreaServices = (hospital, gym, playground, school, university, supermarket, restaurant, parking, bank) => {
    setApartmentData((prevData) => {
      return {
        ...prevData,
        AreaServices: {
          hospital,
          gym,
          playground,
          school,
          university,
          supermarket,
          restaurant,
          parking,
          bank,
        },
      };
    });
  };

  const getAreaServices = () => {
    return apartmentData.AreaServices;
  }

  return (
    <ApartmentContext.Provider
      value={{
        apartmentData,
        addHomeType,
        addLocation,
        getHomeType,
        getLocaion,
        addApartmentInfo,
        getApartmentInfo,
        addPrice,
        getPrice,
        addServicesPrice,
        getServicesPrice,
        addServices,
        getServices,
        addCoverImage,
        getCoverImage,
        addImages,
        getImages,
        SaveApartementData,
        addNameDescription,
        addAreaServices,
        getAreaServices,
        checkApartmentData,
        addUserData,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentProvider;

export const useApartmentContext = () => {
  return useContext(ApartmentContext);
};
