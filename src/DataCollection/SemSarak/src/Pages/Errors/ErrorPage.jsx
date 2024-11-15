import { useRouteError } from "react-router-dom";
import { useState } from "react";
import { FaExclamationTriangle, FaRedo, FaEye, FaEyeSlash } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError(); // Get the error object
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle the visibility of error details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Function to reload the page
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">


      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <div>
          {/* <img crc/> */}
        </div>
        <h1 className="text-5xl font-bold text-red-600 mb-4 flex items-center justify-center gap-2">
          <FaExclamationTriangle /> عذرًا، حدث خطأ!
        </h1>
        <p className="text-xl text-gray-800 mb-6">
          لم نتمكن من تحميل الصفحة. يرجى المحاولة مرة أخرى لاحقًا.
        </p>

        {/* Reload Button */}
        <button
          onClick={reloadPage}
          className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none transition duration-200 ease-in-out"
        >
          <FaRedo /> إعادة تحميل الصفحة
        </button>

        {/* Button to show/hide error details */}
        <button
          onClick={toggleDetails}
          className="flex items-center justify-center gap-2 mt-4 px-5 py-2 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none transition duration-200 ease-in-out"
        >
          {showDetails ? <FaEyeSlash /> : <FaEye />}
          {showDetails ? "إخفاء تفاصيل الخطأ" : "عرض تفاصيل الخطأ"}
        </button>

        {/* Conditionally render error details */}
        {showDetails && (
          <div className="mt-6 text-sm text-gray-700 p-4 bg-gray-100 rounded-lg">
            {error ? (
              <>
                <p className="text-red-500 font-semibold">Error: {error.message}</p>
                <pre className="whitespace-pre-wrap mt-2 text-left">{error.stack}</pre>
              </>
            ) : (
              <p>لا توجد تفاصيل خطأ متاحة.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
