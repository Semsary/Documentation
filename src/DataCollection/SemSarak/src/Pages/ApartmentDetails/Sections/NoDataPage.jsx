import React from 'react';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NoDataPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-lg w-full text-center">
        <MdError className="text-red-600 text-8xl mb-6 animate-pulse" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">الشقة غير متاحة حالياً</h2>
        <p className="text-lg text-gray-600 mb-6">عذراً، الشقة التي بحثت عنها غير متوفرة في الوقت الحالي. يرجى المحاولة لاحقاً.</p>
        <Link to={"/"} className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition duration-300">
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NoDataPage;
