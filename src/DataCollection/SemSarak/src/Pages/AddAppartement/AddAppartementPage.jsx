import { useState } from "react";
import HomeServices from "./Sections.jsx/HomeServices";
import Location from "./Sections.jsx/Location";
import Pricing from "./Sections.jsx/Pricing";
import Rooms from "./Sections.jsx/Rooms";
import Services from "./Sections.jsx/Services";
import Type from "./Sections.jsx/Type";
import UploadImages from "./Sections.jsx/UploadImages";
import SummitApartments from "./Sections.jsx/SummitApartments";
import SurroundingServices from "./Sections.jsx/SurroundingServices";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo/Logo (2).png";
import WaitingAcc from "./Sections.jsx/WatingAcc";

const AddAppartementPage = () => {
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };
  
  const sections = [
    // <Apartment key="Apartment" />,
    <Type key="Type" />,
    <Rooms key="Rooms" />,
    <Location key="Location" />,
    <Pricing key="Pricing" />,
    <Services key="Services" />,
    <UploadImages key="UploadImages" />,
    <HomeServices key="HomeServices" />,
    <SurroundingServices key="SurroundingServices" />,
    <SummitApartments key="SummitApartments" handleNext={handleNext} />,
    <WaitingAcc key="WaitingAcc" />,
  ];


  return (
    <div className=" flex flex-col justify-between">
      <div className="w-full flex flex-row-reverse justify-between py-5 px-2 md:py-3 md:px-20 ">
        <div className="flex items-center md:mr-4">
          <Link
            to="/"
            className="text-sm bg-mainColor text-white px-6 py-2 rounded-md hover:bg-mainColorHover transition-colors"
          >
            الصفحة الرئيسية
          </Link>
        </div>

        <div className="flex items-center ml-4">
          <div className="text-2xl font-bold text-indigo-600">
            <Link to="/">
              <img
                src={Logo}
                alt="Semsary logo"
                className="w-32 transition-all duration-500 ease-in-out hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="transition-all duration-500 ease-in-out pt-20 pb-40"
        key={currentSectionIndex}
      >
        {sections[currentSectionIndex]}
      </div>

      <div className="bg-[#EfEfEf] w-full h-20 fixed bottom-0 left-0">
        <div
          className={`bg-blue-900 h-1 transition-all duration-500 ease-in-out`}
          style={{ width: `${((currentSectionIndex + 1) * 100) / 10}%` }}
        ></div>

        <div className="bg-blue-100 w-full h-full flex justify-between p-5">
          <button
            className="ButtonStyle1"
            onClick={handlePrevious}
            disabled={currentSectionIndex === 0}
          >
            السابق
          </button>

          <button
            className="ButtonStyle1"
            onClick={handleNext}
            disabled={currentSectionIndex === sections.length - 1}
          >
            التالى
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAppartementPage;
