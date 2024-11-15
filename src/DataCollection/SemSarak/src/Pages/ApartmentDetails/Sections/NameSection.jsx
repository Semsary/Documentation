import React from "react";
import formatCurrency from "./../../../Functions/formatCurrency";

const NameSection = ({ name, description, prise }) => {
  return (
    <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto my-8 ">
      <div className="flex md:flex-row flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-lg text-gray-600 mt-2">{description}</p>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-gray-800">السعر</h1>
          <h1 className="text-3xl font-bold text-gray-800">
            {formatCurrency(prise)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NameSection;
