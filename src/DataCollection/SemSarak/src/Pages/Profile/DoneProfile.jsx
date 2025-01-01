import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const DoneProfile = () => {
  const { UserData } = useUserContext();
  const [completed, setCompleted] = useState({
    FirstStep: false,
    SecondStep: false,
  });

  // useEffect(() => {
  //   if (UserData._firsStepFlag) {
  //     setCompleted((prev) => ({ ...prev, FirstStep: true }));
  //   }
  //   if (UserData._secondStepFlag) {
  //     setCompleted((prev) => ({ ...prev, SecondStep: true }));
  //   }
  // }, [UserData]);

  return (
    <div className="flex px-5 flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
   
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md text-center">
        <FaCheckCircle className="text-green-500 text-5xl mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          اكتمل الملف الشخصي!
        </h2>
        <p className="text-gray-700 mb-8">
          تم حفظ جميع بياناتك بنجاح. شكرًا لإكمال الملف الشخصي.
        </p>
        <Link
          className="w-full py-3 px-4 text-lg text-white bg-green-500 rounded-xl hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
          to="/"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default DoneProfile;
