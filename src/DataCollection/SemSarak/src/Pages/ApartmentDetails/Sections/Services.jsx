import React, { useEffect, useState } from "react";
import { PiElevatorDuotone, PiBathtubBold } from "react-icons/pi";
import { TbFridge, TbAirConditioning } from "react-icons/tb";
import { GiGasStove, GiWashingMachine } from "react-icons/gi";
import { FaKitchenSet, FaTv, FaWifi } from "react-icons/fa6";
import { RiArmchairFill } from "react-icons/ri";
import { BsEthernet } from "react-icons/bs";

const Services = ({ data }) => {
  const [services, setServices] = useState({
    wifi: { name: "الواي فاي", avalible: false, icon: <FaWifi size={30} /> },
    Tv: { name: "التلفاز", avalible: false, icon: <FaTv size={30} /> },
    Kitchen: {
      name: "المطبخ",
      avalible: false,
      icon: <FaKitchenSet size={20} />,
    },
    AirCondition: {
      name: "التكييف",
      avalible: false,
      icon: <TbAirConditioning size={20} />,
    },
    WashingMachine: {
      name: "الغسالة",
      avalible: false,
      icon: <GiWashingMachine size={20} />,
    },
    cooker: {
      name: "البوتجاز",
      avalible: false,
      icon: <GiGasStove size={20} />,
    },
    fridge: { name: "الثلاجة", avalible: false, icon: <TbFridge size={20} /> },
    heater: {
      name: "السخان",
      avalible: false,
      icon: <PiBathtubBold size={20} />,
    },
    elevator: {
      name: "المصعد",
      avalible: false,
      icon: <PiElevatorDuotone size={20} />,
    },
    internet: {
      name: "الانترنت الأرضي",
      avalible: false,
      icon: <BsEthernet size={20} />,
    },
    salon: {
      name: "صالة الجلوس",
      avalible: false,
      icon: <RiArmchairFill size={20} />,
    },
    diningRoom: {
      name: "غرفة الطعام",
      avalible: false,
      icon: <FaKitchenSet size={20} />,
    },
  });

  useEffect(() => {
    if (data) {
      setServices((prevServices) => ({
        ...prevServices,
        AirCondition: { ...prevServices.AirCondition, avalible: data.ac },
        cooker: { ...prevServices.cooker, avalible: data.cooker },
        diningRoom: { ...prevServices.diningRoom, avalible: data.diningRoom },
        elevator: { ...prevServices.elevator, avalible: data.elevator },
        fridge: { ...prevServices.fridge, avalible: data.fridge },
        heater: { ...prevServices.heater, avalible: data.heater },
        internet: { ...prevServices.internet, avalible: data.internet },
        Kitchen: { ...prevServices.Kitchen, avalible: data.kitchen },
        salon: { ...prevServices.salon, avalible: data.salon },
        Tv: { ...prevServices.Tv, avalible: data.tv },
        WashingMachine: {
          ...prevServices.WashingMachine,
          avalible: data.washingMachine,
        },
        wifi: { ...prevServices.wifi, avalible: data.wifi },
      }));
    }
  }, [data]);

  return (
    <div className="p-6" style={{ fontFamily: "Cairo" }}>
      <h1 className="text-xl font-bold mb-4 text-gray-700">
        الخدمات الموجودة فى الشقة
      </h1>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {Object.keys(services).map(
          (key) =>
            services[key].avalible && (
              <div
                key={key}
                className="flex gap-3 text-center items-center bg-gray-100 rounded-lg border-2 border-gray-200 p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-mainColor mb-2">{services[key].icon}</div>
                <p className="text-gray-700 text- font-semibold">
                  {services[key].name}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Services;
