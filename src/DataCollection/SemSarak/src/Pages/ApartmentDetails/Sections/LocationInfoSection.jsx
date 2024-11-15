import { FaMapMarkerAlt, FaCity, FaHome } from "react-icons/fa";

const LocationInfoSection = ({ locationData }) => {
  // تحقق إذا كان locationData موجودًا
  if (!locationData) {
    return (
      <div className="text-center text-xl text-red-500">
        لا توجد بيانات للموقع.
      </div>
    );
  }

  return (
    <div className="p-6 bg-white mx-auto mt-8" style={{ fontFamily: "Cairo" }}>
      <h2 className="text-2xl font-bold mb-4 text-gray-700">معلومات الموقع</h2>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-12">
        {["area", "city", "floor"].map((key) => (
          <div key={key} className="flex gap-3 flex- items-center space-x-3">
            {/* استخدام الأيقونات بناءً على المفتاح */}
            <div className="text-2xl text-mainColor">
              {key === "area" && <FaMapMarkerAlt />}
              {key === "city" && <FaCity />}
              {key === "floor" && <FaHome />}
            </div>
            <div className="flex flex-row gap-1">
              <p className="text-lg font-medium text-gray-700">
                {key === "area"
                  ? " محافظة"
                  : key === "city"
                  ? " مدينة"
                  : key === "floor"
                  ? " الدور"
                  : key}
              </p>
              <span className="text-lg font-medium text-gray-700">
                {locationData[key]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationInfoSection;
