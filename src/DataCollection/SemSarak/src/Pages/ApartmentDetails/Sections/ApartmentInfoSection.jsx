const ApartmentInfoSection = ({ data }) => {
  // تحقق إذا كان ApartmentInfo موجودًا
  if (!data) {
    return (
      <div className="text-center text-xl text-red-500">
        لا توجد بيانات لعرضها.
      </div>
    );
  }

  return (
    <div className="p-6 bg-white mx-auto mt-8" style={{ fontFamily: "Cairo" }}>
      <h2 className="text-2xl font-bold mb-4 text-gray-700">معلومات الشقة </h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-start gap-3 items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md"
          >
            <span className=" font-medium text-gray-700">
              {"عدد "}
              {key === "acUnits"
                ? "وحدات التكييف"
                : key === "balconies"
                ? "الشرفات"
                : key === "bathrooms"
                ? "الحمامات"
                : key === "bedrooms"
                ? "غرف النوم"
                : key === "beds"
                ? "الأسرة"
                : key === "chairs"
                ? "الكراسي"
                : key === "tables"
                ? "الموائد"
                : key}
            </span>
            <span className=" text-gray-900 font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentInfoSection;
