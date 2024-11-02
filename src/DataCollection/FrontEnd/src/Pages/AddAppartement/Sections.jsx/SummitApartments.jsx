import React from "react";

const SummitApartments = () => {
  const Texts = { title: "الخطوة الاخيرة", description: "" };

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
              className="inputStyle1 mb-8"
              placeholder="قم بأختيار اسم لشقتك (أختياري)"
            />
          </label>
          <label htmlFor="in1" className="text-right text-gray-800">
            وصف الشقة
            <textarea
              type="text"
              id="in1"
              className="inputStyle1 mb-8"
              placeholder="قم بأختيار وصف بيسط لشقتك (أختياري)"
            />
          </label>

          <button className="ButtonStyle1">نشر الشقة</button>
        </div>
      </div>
    </div>
  );
};

export default SummitApartments;
