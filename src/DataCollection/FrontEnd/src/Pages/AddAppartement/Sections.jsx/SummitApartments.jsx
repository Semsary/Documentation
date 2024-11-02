import React, { useEffect, useState } from "react";
import { useApartmentContext } from "../../../context/ApartmentContext";
import toast, { Toaster } from "react-hot-toast";

const SummitApartments = () => {
  const [apartmentData, setApartmentData] = useState({
    name: "",
    description: "",
  });

  const { SaveApartementData, addNameDescription } = useApartmentContext();

  const Texts = { title: "الخطوة الاخيرة", description: "" };

  const handleChange = (e) => {
    setApartmentData({ ...apartmentData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    addNameDescription(apartmentData.name, apartmentData.description);
  }, [apartmentData]);

  const notify = () => toast.success("تم نشر الشقة بنجاح");

  const HadelSubmet = () => {
    // SaveApartementData();
    notify();
  };
  return (
    <div>
      <div className="mx-auto w-[700px] text-right fadeInAnmation">
        <div className="flex flex-col mx-auto ">
          <h1 className="text-3xl font-semibold">{Texts.title}</h1>
          <p className="text-[#808080] mb-8 mt-5 text-s">{Texts.description}</p>

          <label htmlFor="in1 " className="text-right text-gray-800">
            اختر اسم لشقتك
            <input
              type="text"
              id="in1"
              name="name"
              onChange={handleChange}
              className="inputStyle1 mb-8"
              placeholder="قم بأختيار اسم لشقتك (أختياري)"
            />
          </label>
          <label htmlFor="in1" className="text-right text-gray-800">
            وصف الشقة
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              id="in1"
              className="inputStyle1 mb-8"
              placeholder="قم بأختيار وصف بيسط لشقتك (أختياري)"
            />
          </label>

          <button className="ButtonStyle1" onClick={HadelSubmet}>
            نشر الشقة
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SummitApartments;
