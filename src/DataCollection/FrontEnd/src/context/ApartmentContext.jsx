import { createContext, useContext, useState, useEffect } from "react";
import Apartment from "../Pages/AddAppartement/Sections.jsx/Apartment";
import Rooms from "../Pages/AddAppartement/Sections.jsx/Rooms";
import { useFirebase } from "../Firebase/useFirebase";
import Services from "../Pages/AddAppartement/Sections.jsx/Services";

const ApartmentContext = createContext();

const ApartmentProvider = ({ children }) => {


  //  addServices(
  //    Services.wifi.avalible,
  //    Services.Tv.avalible,
  //    Services.Kitchen.avalible,
  //    Services.elevator.avalible,
  //    Services.AirCondition.avalible,
  //    Services.WashingMachine.avalible,
  //    Services.cooker.avalible,
  //    Services.fridge.avalible,
  // //    Services.heater.avalible,
  // //    Services.internet.avalible,
  // //    Services.salon.avalible,
  // //    Services.diningRoom.avalible
  // // );
  

  //  const [services, setServices] = useState({
  //    hospital: {
  //      name: "المستشفى",
  //      available: false,
  //      icon: <FaHospital size={30} />,
  //    },
  //    gym: {
  //      name: "صالة الألعاب الرياضية",
  //      available: false,
  //      icon: <CgGym size={30} />,
  //    },
  //    playground: {
  //      name: "ملعب كرة القدم",
  //      available: false,
  //      icon: <IoIosFootball size={30} />,
  //    },
  //    school: {
  //      name: "المدرسة",
  //      available: false,
  //      icon: <FaSchool size={30} />,
  //    },
  //    university: {
  //      name: "الجامعة",
  //      available: false,
  //      icon: <FaUniversity size={30} />,
  //    },
  //    supermarket: {
  //      name: "السوبر ماركت",
  //      available: false,
  //      icon: <FaStore size={30} />,
  //    },
  //    restaurant: {
  //      name: "المطعم",
  //      available: false,
  //      icon: <FaUtensils size={30} />,
  //    },
  //    parking: {
  //      name: "موقف السيارات",
  //      available: false,
  //      icon: <FaParking size={30} />,
  //    },
  //    bank: {
  //      name: "البنك",
  //      available: false,
  //      icon: <BsBank size={30} />,
  //    },
  //  });

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

  const SaveApartementData = () => {
    AddApartment(apartmentData)
      .then(() => {
        alert("Appartement Added Successfully");
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
        getAreaServices
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
