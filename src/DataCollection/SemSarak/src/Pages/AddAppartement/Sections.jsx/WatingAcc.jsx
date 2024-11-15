import React, { useState } from "react";
import { FaInfoCircle, FaRegHandshake, FaCheckCircle } from "react-icons/fa"; // استيراد الأيقونات
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const WaitingAcc = () => {
  const [showReason, setShowReason] = useState(false);

  const handleToggleReason = () => {
    setShowReason(!showReason);
  };

  return (
    <div className="mx-auto max-w-[700px] text-right fadeInAnimation px-10">
      <h1 className="text-3xl font-semibold mb-8">
      <p className="text-[#82c13b] text-2xl py-10"><IoCheckmarkDoneCircle size={50}/></p>

        شكرًا لتسجيلك معنا!
      </h1>

      <p className="text-2xl mb-8">
        الشقة قيد المراجعة حاليًا، وسيتم نشرها في حال تمت الموافقة عليها.
      </p>

      <button
        className="text-blue-500 hover:text-blue-700 mt-4 flex items-center"
        onClick={handleToggleReason}
      >
        <FaInfoCircle className="mr-2" /> {/* أيقونة معلومات */}
        اعرف سبب عدم نشر الشقة وشروط قبولها
      </button>

      {showReason && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <p className="text-lg mb-2">
            <FaCheckCircle className="inline-block mr-2 text-green-500" /> 
            <strong>سبب عدم نشر الشقة وشروط قبولها:</strong> 
            قد لا يتم نشر الشقة على الفور إذا كانت تحتوي على بيانات أو صور غير دقيقة أو عشوائية، ويجب التأكد من أن الشقة لا تحتوي على أي بيانات غير ملائمة وأن كافة المعلومات واضحة ودقيقة.
          </p>
          <p className="text-lg mt-2">
            <FaRegHandshake className="inline-block mr-2 text-yellow-500" /> 
            سيتم نشر الشقة بعد التأكد من استيفائها لكافة الشروط.
          </p>
        </div>
      )}
    </div>
  );
};

export default WaitingAcc;
