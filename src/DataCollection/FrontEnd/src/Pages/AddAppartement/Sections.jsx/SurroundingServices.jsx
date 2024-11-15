import React, { useEffect, useState } from "react";
import { CgGym } from "react-icons/cg";
import {
  FaHospital,
  FaRunning,
  FaPlay,
  FaSchool,
  FaUniversity,
  FaStore,
  FaUtensils,
  FaParking,
} from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { BsBank } from "react-icons/bs";
import { useApartmentContext } from "../../../context/ApartmentContext";

const SurroundingServices = () => {
  const { addAreaServices, getAreaServices } = useApartmentContext();


  const [services, setServices] = useState({
    hospital: {
      name: "المستشفى",
      available: false,
      icon: <FaHospital size={30} />,
    },
    gym: {
      name: "صالة الألعاب الرياضية",
      available: false,
      icon: <CgGym size={30} />,
    },
    playground: {
      name: "ملعب كرة القدم",
      available: false,
      icon: <IoIosFootball size={30} />,
    },
    school: {
      name: "المدرسة",
      available: false,
      icon: <FaSchool size={30} />,
    },
    university: {
      name: "الجامعة",
      available: false,
      icon: <FaUniversity size={30} />,
    },
    supermarket: {
      name: "السوبر ماركت",
      available: false,
      icon: <FaStore size={30} />,
    },
    restaurant: {
      name: "المطعم",
      available: false,
      icon: <FaUtensils size={30} />,
    },
    parking: {
      name: "موقف السيارات",
      available: false,
      icon: <FaParking size={30} />,
    },
    bank: {
      name: "البنك",
      available: false,
      icon: <BsBank size={30} />,
    },
  });

  const handleServiceToggle = (service) => {
    setServices((prevServices) => ({
      ...prevServices,
      [service]: {
        ...prevServices[service],
        available: !prevServices[service].available,
      },
    }));
  };

  // useEffect(() => {
  //   const areaServices = getAreaServices();
  //   if (areaServices) {
  //     setServices(areaServices);
  //   }
  // }, [getAreaServices]);

  useEffect(() => {
    addAreaServices(
      services.hospital.available,
      services.gym.available,
      services.playground.available,
      services.school.available,
      services.university.available,
      services.supermarket.available,
      services.restaurant.available,
      services.parking.available,
      services.bank.available

    );
  }, [services]);



  return (
    <div className="container mx-auto p-6 text-right fadeInAnmation">
      <div className="w-full max-w-[700px] mx-auto bg-white">
        <h1 className="text-3xl font-bold mb-4">الخدمات المحيطة بالسكن</h1>
        <p className="text-gray-600 mb-8">اختر الخدمات المتوفرة حول السكن.</p>
        <div className="grid grid-cols-3  gap-4">
          {Object.keys(services).map((service) => (
            <div
              key={services[service].name}
              className={`flex flex-col items-center justify-center p-4 py-6 border fadeInAnmation
               ${
                 !services[service].available
                   ? ""
                   : "bg-gray-100 border-black border-2"
               }
                rounded-lg`}
              onClick={() => handleServiceToggle(service)}
            >
              <div className="flex justify-between gap-10">
                <div>{services[service].icon}</div>
                <h2 className="text-lg font-medium mt-2">
                  {services[service].name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurroundingServices;
