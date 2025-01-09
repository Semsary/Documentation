import React, { useEffect, useState } from "react";

const PriceDetails = ({ data }) => {
  const [rentType] = useState({
    FullHome: {
      name: "استئجار الشقة بالكامل",
      value: "FullHome",
    },
    SingleRoom: {
      name: "استئجار غرفة منفردة",
      value: "SingleRoom",
    },
    SingleBed: {
      name: "استئجار سرير فقط",
      value: "SingleBed",
    },
  });

  const [priceDetails, setPriceDetails] = useState({
    homeType: "",
    guarantee: "",
    price: "",
    semsar: "",
  });

  useEffect(() => {
    if (data) {
      setPriceDetails({
        homeType: data.homeType,
        guarantee: data.guarantee,
        price: data.price,
        semsar: data.semsar,
      });
    }
  }, [data]);

  return (
    <div className="p-6 bg-white min-w-80 rounded-lg shadow-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">تفاصيل السعر</h1>
      <div className="space-y-6">
        {/* Home Type */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <span className="text-gray-600 font-semibold">نوع السكن:</span>
          <span className="text-mainColor font-medium">
            {rentType[priceDetails.homeType]?.name || "سكن طلاب   "}
          </span>
        </div>

        {/* Guarantee */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <span className="text-gray-600 font-semibold">التأمين:</span>
          <span className="text-mainColor font-medium">
            {priceDetails.guarantee} جنيه
          </span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <span className="text-gray-600 font-semibold">السعر:</span>
          <span className="text-mainColor font-medium">
            {priceDetails.price} جنيه
          </span>
        </div>

        {/* Semsar */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <span className="text-gray-600 font-semibold">سمسار:</span>
          <span className="text-mainColor font-medium">
            {priceDetails.semsar} جنيه
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
