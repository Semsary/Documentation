import React, { useEffect, useState } from "react";
import { useApartmentContext } from "../../../context/ApartmentContext";
import toast, { Toaster } from "react-hot-toast";
import { redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const SummitApartments = () => {
  const [apartmentData, setApartmentData] = useState({
    name: "",
    description: "",
  });

  const { getUserId, getUserFullEmail } = useAuth();
  const Uid = getUserId();
  const Email = getUserFullEmail();
  const getDateTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return `${date.toLocaleDateString()} ${time}`;
  };

  const Navigate = useNavigate();

  const { SaveApartementData, checkApartmentData,addNameDescription,addUserData } = useApartmentContext();

  const Texts = { title: "الخطوة الاخيرة", description: "" };

  const handleChange = (e) => {
    setApartmentData({ ...apartmentData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    addNameDescription(apartmentData.name, apartmentData.description);
  }, [apartmentData]);

  const notify = () => toast.success("تم نشر الشقة بنجاح");

  const HadelSubmet = () => {

    try{
      addUserData(Uid, Email, getDateTime());
      console.log(Uid, Email, getDateTime());
    }catch (error) {

      addUserData("Uid", "Email", "getDateTime");

    }


    
    if (checkApartmentData()!=="true") {
      toast.error("يجب ملئ جميع البيانات السابقة لنشر الشقة")
      return toast.error(checkApartmentData());
    }

    SaveApartementData();
    notify();

    redirectToHome();
  };


  const redirectToHome = () => {
    setTimeout(() => {
      Navigate("/");
    }, 2000);   
    
  };
  return (
    <div>
      <div className="mx-auto max-w-[700px] p-10 text-right fadeInAnmation">
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
              placeholder="قم بأختيار اسم لشقتك (اسم مناسب ليكون عنوان للشقة عند عرضها) "
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
              placeholder="قم بأختيار وصف - يمكنك اضافة مميزات الشقة والموقع والخدمات المقدمة و رايك الشخصي عن الشقة"  
             />
          </label>

          <button
            onClick={HadelSubmet}
            className="w-full px-4 py-5 text-xl font-medium text-white bg-mainColor border border-transparent rounded-md shadow-sm hover:bg-mainColorHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            نــشــر الــشــقــة
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SummitApartments;
