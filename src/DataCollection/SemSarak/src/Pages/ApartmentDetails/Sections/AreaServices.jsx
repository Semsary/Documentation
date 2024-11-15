import React, { useEffect, useState } from "react";
import {
  FaHospital,
  FaSchool,
  FaUniversity,
  FaStore,
  FaUtensils,
  FaParking,
} from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { IoIosFootball } from "react-icons/io";
import { BsBank } from "react-icons/bs";

const AreaServices = ({ data }) => {
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

  useEffect(() => {
    if (data) {
      setServices((prevServices) => ({
        ...prevServices,
        hospital: { ...prevServices.hospital, available: data.hospital },
        gym: { ...prevServices.gym, available: data.gym },
        playground: { ...prevServices.playground, available: data.playground },
        school: { ...prevServices.school, available: data.school },
        university: { ...prevServices.university, available: data.university },
        supermarket: {
          ...prevServices.supermarket,
          available: data.supermarket,
        },
        restaurant: { ...prevServices.restaurant, available: data.restaurant },
        parking: { ...prevServices.parking, available: data.parking },
        bank: { ...prevServices.bank, available: data.bank },
      }));
    }
  }, [data]);

  return (
    <div className="p-6" style={{ fontFamily: "Cairo" }}>
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        الخدمات في المنطقة
      </h1>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {Object.keys(services).map(
          (key) =>
            services[key].available && (
              <div
                key={key}
                className="flex flex-col items-center bg-gray-100 rounded-lg border-2 border-gray-200 p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-mainColor mb-2">{services[key].icon}</div>
                <p className="text-gray-700 text-lg font-semibold">
                  {services[key].name}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default AreaServices;
