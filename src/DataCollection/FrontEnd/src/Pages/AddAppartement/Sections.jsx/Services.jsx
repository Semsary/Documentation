import React, { useEffect, useState } from "react";
import "../../../styles/anmation.css";
import { useApartmentContext } from "../../../context/ApartmentContext";

const Services = () => {
  const { addServicesPrice, getServicesPrice } = useApartmentContext();
  const Texts = {
    title: "أسعار الخدمات",
    description: "إذا كانت أسعار إيجار الشقة تشمل هذه الخدمات، يُرجى إدخالها بقيمة 0 جنيه.",
  };
  const [Services, setServices] = useState({
    electricity: {
      name: "الكهرباء - التكلفة التي تدفعها مقابل استهلاك الكهرباء في الشقة",
      estimatedCost: 0,
    },
    water: {
      name: "الماء - التكلفة التي تدفعها مقابل استهلاك المياه في الشقة",
      estimatedCost: 0,
    },
    gas: {
      name: "الغاز - التكلفة التي تدفعها مقابل استخدام الغاز للطهي أو التدفئة",
      estimatedCost: 0,
    },
    internet: {
      name: "الإنترنت - التكلفة التي تدفعها مقابل اشتراك الإنترنت الشهري",
      estimatedCost: 0,
    },
  });

  useEffect(() => {
    // console.log(Services);
    addServicesPrice(
      Services.water.estimatedCost,
      Services.electricity.estimatedCost,
      Services.gas.estimatedCost,
      Services.internet.estimatedCost
    );
  }, [Services]);

  return (
    <div className="container mx-auto p-6 text-right fadeInAnmation">
      <div className="w-full max-w-[700px] mx-auto bg-white ">
        <h1 className="text-3xl font-bold mb-4">{Texts.title}</h1>
        <p className="text-gray-600 mb-8">{Texts.description}</p>

        <div className="space-y-4" style={{ direction: "rtl" }}>
          {Object.keys(Services).map((service) => (
            <div
              key={Services[service].name}
              className="flex justify-between items-center border-b pb-4 mb-4 fadeInAnmation"
            >
              <h2 className="text-lg font-medium">{Services[service].name}</h2>

              <div
                className="flex items-center space-x-4 gap-8 text-right "
                style={{ direction: "rtl" }}
              >
                <input
                  type="number"
                  value={Services[service].estimatedCost}
                  onChange={(e) => {
                    setServices((prevServices) => {
                      const updatedServices = {
                        ...prevServices,
                        [service]: {
                          ...prevServices[service],
                          estimatedCost: e.target.value,
                        },
                      };
                      return updatedServices;
                    });
                  }}
                  className="w-24 p-2 border rounded-md"
                  placeholder="التكلفة"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
