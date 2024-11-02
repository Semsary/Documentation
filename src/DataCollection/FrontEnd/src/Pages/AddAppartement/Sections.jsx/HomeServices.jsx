import React, { useState } from "react";
import { PiElevatorDuotone, PiBathtubBold } from "react-icons/pi";
import { TbFridge, TbAirConditioning } from "react-icons/tb";
import { GiGasStove, GiWashingMachine } from "react-icons/gi";
import { FaKitchenSet, FaTv, FaWifi } from "react-icons/fa6";

const HomeServices = () => {
  const [Services, setServices] = useState({
    wifi: {
      name: "الواي فاي",
      avalible: true,
      icon: <FaWifi />,
    },
    Tv: {
      name: "التلفاز",
      avalible: true,
      icon: <FaTv />,
    },
    Kitchen: {
      name: "المطبخ",
      avalible: true,
      icon: <FaKitchenSet />,
    },
    AirCondition: {
      name: "التكييف",
      avalible: true,
      icon: <TbAirConditioning />,
    },
    WashingMachine: {
      name: "الغسالة",
      avalible: true,
      icon: <GiWashingMachine />,
    },
    cooker: {
      name: "البوتجاز",
      avalible: true,
      icon: <GiGasStove />,
    },
    fridge: {
      name: "الثلاجة",
      avalible: true,
      icon: <TbFridge />,
    },
    heater: {
      name: "السخان",
      avalible: true,
      icon: <PiBathtubBold />,
    },
    elevator: {
      name: "المصعد",
      avalible: true,
      icon: <PiElevatorDuotone />,
    },
  });

  const Texts = {
    title: "رفع الصور",
    description: "يمكنك رفع صور للشقة لتظهر بشكل أفضل",
  };

  return (
    <div className="container mx-auto p-6 text-right">
      <div className="w-full max-w-[700px] mx-auto bg-white ">
        <h1 className="text-3xl font-bold mb-4">{Texts.title}</h1>
        <p className="text-gray-600 mb-8">{Texts.description}</p>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(Services).map((service) => (
            <div
              key={Services[service].name}
              className="flex flex-col items-center justify-center p-4 border rounded-lg"
            >
              {Services[service].icon}
              <h2 className="text-lg font-medium mt-2">{Services[service].name}</h2>
              <button
                className={`mt-2 px-4 py-2 rounded-lg ${
                  Services[service].avalible ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={() => {
                  setServices((prevServices) => {
                    const updatedServices = {
                      ...prevServices,
                      [service]: {
                        ...prevServices[service],
                        avalible: !prevServices[service].avalible,
                      },
                    };
                    return updatedServices;
                  });
                }}
              >
                {Services[service].avalible ? "متاح" : "غير متاح"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
