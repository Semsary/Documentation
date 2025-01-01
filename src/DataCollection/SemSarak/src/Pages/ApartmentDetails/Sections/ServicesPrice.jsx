import React, { useEffect, useState } from "react";

const ServicesPrice = ({ data }) => {
  const [servicesPrice, setServicesPrice] = useState({
    electricity: { name: "الكهرباء", price: "", unit: "جنيه" },
    gas: { name: "الغاز", price: "", unit: "جنيه" },
    internet: { name: "الإنترنت", price: "", unit: "جنيه" },
    water: { name: "المياه", price: "", unit: "جنيه" },
  });

  useEffect(() => {
    if (data) {
      setServicesPrice((prevServicesPrice) => ({
        ...prevServicesPrice,
        electricity: {
          ...prevServicesPrice.electricity,
          price: data.electricity,
        },
        gas: { ...prevServicesPrice.gas, price: data.gas },
        internet: { ...prevServicesPrice.internet, price: data.internet },
        water: { ...prevServicesPrice.water, price: data.water },
      }));
    }
  }, [data]);

  return (
    <div className="p-6 bg-white rounded-lg  min-w-80 shadow-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">أسعار الخدمات</h1>
      <div className="space-y-6">
        {Object.keys(servicesPrice).map(
          (key) =>
           (
              <div
                key={key}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <span className="text-gray-600 font-semibold">
                  {servicesPrice[key].name}:
                </span>
                <span className="text-mainColor font-medium">
                  {servicesPrice[key].price} {servicesPrice[key].unit}
                </span>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ServicesPrice;
