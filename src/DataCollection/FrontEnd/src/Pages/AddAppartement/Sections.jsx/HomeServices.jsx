import React, { useEffect, useState } from "react";
import { PiElevatorDuotone, PiBathtubBold } from "react-icons/pi";
import { TbFridge, TbAirConditioning } from "react-icons/tb";
import { GiGasStove, GiWashingMachine } from "react-icons/gi";
import { FaKitchenSet, FaTv, FaWifi } from "react-icons/fa6";
import { useApartmentContext } from "../../../context/ApartmentContext";
import { RiArmchairFill } from "react-icons/ri";
import { BsEthernet } from "react-icons/bs";

const HomeServices = () => {
  const { addServices, getServices } = useApartmentContext();
  const [Services, setServices] = useState({
    wifi: {
      name: "الواي فاي",
      avalible: false,
      icon: <FaWifi size={30} />,
    },
    Tv: {
      name: "التلفاز",
      avalible: false,
      icon: <FaTv size={30} />,
    },
    Kitchen: {
      name: "المطبخ",
      avalible: false,
      icon: <FaKitchenSet size={30} />,
    },
    AirCondition: {
      name: "التكييف",
      avalible: false,
      icon: <TbAirConditioning size={30} />,
    },
    WashingMachine: {
      name: "الغسالة",
      avalible: false,
      icon: <GiWashingMachine size={30} />,
    },
    cooker: {
      name: "البوتجاز",
      avalible: false,
      icon: <GiGasStove size={30} />,
    },
    fridge: {
      name: "الثلاجة",
      avalible: false,
      icon: <TbFridge size={30} />,
    },
    heater: {
      name: "السخان",
      avalible: false,
      icon: <PiBathtubBold size={30} />,
    },
    elevator: {
      name: "المصعد",
      avalible: false,
      icon: <PiElevatorDuotone size={30} />,
    },
    internet: {
      name: "الانترنت الأرضي",
      avalible: false,
      icon: <BsEthernet size={30} />,
    },
    salon: {
      name: "صالة الجلوس",
      avalible: false,
      icon: <RiArmchairFill size={30} />,
    },
    diningRoom: {
      name: "غرفة الطعام",
      avalible: false,
      icon: <FaKitchenSet size={30} />,
    },
  });

  useEffect(() => {
    addServices(
      Services.wifi.avalible,
      Services.Tv.avalible,
      Services.Kitchen.avalible,
      Services.elevator.avalible,
      Services.AirCondition.avalible,
      Services.WashingMachine.avalible,
      Services.cooker.avalible,
      Services.fridge.avalible,
      Services.heater.avalible,
      Services.internet.avalible,
      Services.salon.avalible,
      Services.diningRoom.avalible
    );
  }, [Services]);

  const Texts = {
    title: "اضف الخدمات المتوفرة في الشقة",
    description: "اختر الخدمات المتوفرة في الشقة التي تريد اضافتها",
  };

  return (
    <div className="container mx-auto p-6 text-right fadeInAnmation">
      <div className="w-full max-w-[700px] mx-auto bg-white ">
        <h1 className="text-3xl font-bold mb-4">{Texts.title}</h1>
        <p className="text-gray-600 mb-8">{Texts.description}</p>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(Services).map((service) => (
            <div
              key={Services[service].name}
              className={`flex flex-col items-center justify-center p-4 py-6 border fadeInAnmation
             ${
               !Services[service].avalible
                 ? ""
                 : "bg-gray-100 border-black border-2"
             } 
              rounded-lg`}
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
              <div className="flex justify-between gap-10">
                <div> {Services[service].icon}</div>
                <h2 className="text-lg font-medium mt-2">
                  {Services[service].name}
                </h2>
              </div>
              {/* {Services[service].icon} */}
              {/* {Services[service].avalible ? "متاح" : "غير متاح"} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
