import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Pricing = () => {
  const Texts = { title: "الاسعار", description: "  " };
  const [rentTypeSelect, setRentTypeSelect] = useState({
    value: 1,
    name: "هل قمت باستئجار الشقة بالكامل؟",
  });
  const [rentType, setRentType] = useState({
    Type1: {
      name: "استئجار الشقة بالكامل",
      value: 1,
    },
    Type2: {
      name: "استئجار غرفة منفردة",
      value: 2,
    },
    Type3: {
      name: "استئجار سرير فقط",
      value: 3,
    },
  });

  const {} = useForm();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedName = Object.values(rentType).find(
      (type) => type.value === parseInt(selectedValue)
    ).name;
    setRentTypeSelect({ value: selectedValue, name: selectedName });
  };

  return (
    <div>
      <div className="mx-auto w-[700px] text-right">
        <div className="flex flex-col mx-auto">
          <h1 className="text-3xl font-semibold">{Texts.title}</h1>
          <p className="text-[#808080] mb-8 mt-5 text-s">{Texts.description}</p>
          <form>
            <label htmlFor="in1">
              <select className="inputStyle1 mb-8" onChange={handleSelectChange}>
                <option value="">نوع الايجار</option>
                {Object.keys(rentType).map((type) => (
                  <option key={rentType[type].value} value={rentType[type].value}>
                    {rentType[type].name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="in1">
              سعر {rentTypeSelect.name}
              <input type="number" id="in1" className="inputStyle1 mb-8" />
            </label>
            <label htmlFor="in2">
              عمولة سمسار العقارات
              <input type="number" id="in2" className="inputStyle1 mb-8" />
            </label>
            <label htmlFor="in3">
              التأمين
              <input type="number" id="in3" className="inputStyle1 mb-8" />
            </label>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
