import { Link } from "react-router-dom";
import { FaBed, FaBath, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import formatCurrency from "../../../Functions/formatCurrency";

const ApartmentCard = ({ apartment }) => {
  return (
    <div
      className="max-w-sm mx-auto bg-white shadow-lg w-full rounded-lg overflow-hidden
        transition duration-200 ease-in-out transform fadeInAnmation hover:shadow-xl"
      style={{ fontFamily: "Cairo" }}
    >
      <div className="relative w-full h-48">
        <img
          loading="lazy"
          className="w-full h-full object-cover
               transition duration-200 ease-in-out transform hover:scale-105"
          src={apartment.coverImage}
          alt="Apartment"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black hover:from-gray-700 
        transition duration-200 ease-in-out transform to-transparent opacity-50 brightness-95"
        ></div>
        
        {/* Badge over the image */}
        <div className="absolute top-2 left-2 bg-green-500 text-white py-1 px-3 rounded-full text-sm font-bold">
          مميزة
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl min-h-7 font-bold text-gray-800">
          {apartment.name.length > 40
            ? `${apartment.name.slice(0, 40)}...`
            : apartment.name}
        </h3>

        <p className="text-gray-600 min-h-7 mt-2">
          {apartment.description.length > 90
            ? `${apartment.description.slice(0, 90)}...`
            : apartment.description}
        </p>

        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-600">
            <FaBed className="inline-block mr-1" /> {apartment.bedroom} غرف
          </span>
          <span className="text-sm text-gray-600">
            <FaBath className="inline-block mr-1" /> {apartment.bathroom} حمام
          </span>
          <span className="text-sm text-gray-500">
            <FaMapMarkerAlt className="inline-block mr-1" /> الموقع:{" "}
            {apartment.locationCity}
          </span>
        </div>
        <div className="mt-2"></div>

        <div className="mt-4 flex justify-between flex-row">
          <div className="flex flex-row-reverse justify-between ">
            <span className="text-xl font-extrabold text-gray-900">
              {formatCurrency(apartment.price)}
            </span>
          </div>

          <Link
            to={`/apartment/${apartment.id}`}
            className="bg-mainColor text-white py-2 px-4 rounded-lg hover:bg-mainColorHover transition duration-200 "
          >
            عرض التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
