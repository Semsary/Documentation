import { useState } from "react";
import HomeServices from "./Sections.jsx/HomeServices";
import Location from "./Sections.jsx/Location";
import Pricing from "./Sections.jsx/Pricing";
import Rooms from "./Sections.jsx/Rooms";
import Services from "./Sections.jsx/Services";
import Type from "./Sections.jsx/Type";
import UploadImages from "./Sections.jsx/UploadImages";
import SummitApartments from "./Sections.jsx/SummitApartments";
import Apartment from "./Sections.jsx/Apartment";
import SurroundingServices from "./Sections.jsx/SurroundingServices";

const AddAppartementPage = () => {
  const sections = [
    // <Apartment key="Apartment" />,
    <Rooms key="Rooms" />,
    <Type key="Type" />,
    <Location key="Location" />,
    <Pricing key="Pricing" />,
    <Services key="Services" />,
    <UploadImages key="UploadImages" />,
    <HomeServices key="HomeServices" />,
    <SurroundingServices key="SurroundingServices" />,
    <SummitApartments key="SummitApartments" />,
  ];

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

  return (
    <div className="pt-40 flex flex-col justify-between">
      <div
        className="transition-all duration-500 ease-in-out"
        key={currentSectionIndex}
      >
        {sections[currentSectionIndex]}
      </div>

      <div className="bg-[#EfEfEf] w-full h-20 fixed bottom-0 left-0">
        <div
          className={`bg-blue-900 h-1 transition-all duration-500 ease-in-out`}
          style={{ width: `${((currentSectionIndex + 1) * 100) / 9}%` }}
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
