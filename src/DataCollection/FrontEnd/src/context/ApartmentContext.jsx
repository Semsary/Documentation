import { createContext, useContext, useState, useEffect } from "react";
import Apartment from "../Pages/AddAppartement/Sections.jsx/Apartment";
import Rooms from "../Pages/AddAppartement/Sections.jsx/Rooms";

const ApartmentContext = createContext();

const ApartmentProvider = ({ children }) => {
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
          Rooms: {
            beds: 1,
            bathrooms: false,
            aircondition: false,
            balcony: false,
            dressRoom: false,
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
          },
        };
  });

  useEffect(() => {
    localStorage.setItem("apartmentData", JSON.stringify(apartmentData));
  }, [apartmentData]);

  const addHomeType = (type) => {
    setApartmentData((prevData) => {
      return { ...prevData, HomeType: type };
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

  const addRooms = (beds, bathrooms, aircondition, balcony, dressRoom) => {
    setApartmentData((prevData) => {
      return { ...prevData, Rooms: { beds, bathrooms, aircondition, balcony, dressRoom } };
    });
  };

  const getRooms = () => {
    return apartmentData.Rooms;
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
      return { ...prevData, ServicesPrice: { water, electricity, gas, internet } };
    });
  };

  const getServicesPrice = () => {
    return apartmentData.ServicesPrice;
  };

  const addServices = (wifi, tv, kitchen, elevator, ac, washingMachine, cooker, fridge, heater) => {
    setApartmentData((prevData) => {
      return {
        ...prevData,
        Servicses: { wifi, tv, kitchen, elevator, ac, washingMachine, cooker, fridge, heater },
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

  

  return (
    <ApartmentContext.Provider
      value={{
        apartmentData,
        addHomeType,
        addLocation,
        getHomeType,
        getLocaion,
        addRooms,
        getRooms,
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
