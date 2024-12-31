import { useEffect, useState } from "react";
import MianInfo from "./MianInfo";
import MoreUserInfo from "./MoreUserInfo";
import DoneProfile from "./DoneProfile";
import { useUserContext } from "../../context/UserContext";
import Apartments from "../Apartments/Apartments";
import { useNavigate } from "react-router-dom";

const ProfileData = () => {
  const { UserData } = useUserContext();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const NavigatePage = useNavigate();
  // useEffect(() => {
  //   // console.log(UserData);
  //   // console.log(UserData._firsStepFlag , UserData._secondStepFlag);
  //   let index = 0;
  //   if (UserData._firsStepFlag && !UserData._secondStepFlag) {
  //     index = 1;
  //   } else if (UserData._firsStepFlag && UserData._secondStepFlag) {
  //     index = 2;
  //   }
  //   setCurrentSectionIndex(index);
  // }, [UserData]);


    const handleNext = () => {
      if (currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
      }
    };


  const sections = [
    <MianInfo key="MianInfo" handleNext={handleNext} />,
    <MoreUserInfo key="MoreUserInfo" handleNext={handleNext} />,
    <DoneProfile key="DoneProfile" />,
  ];



  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  return (
    <div className=" flex flex-col justify-between">
      <div
        className="transition-all duration-500 ease-in-out"
        key={currentSectionIndex}
      >
        {sections[currentSectionIndex]}
      </div>

      <div className="bg-[#EfEfEf] w-full h-20 fixed bottom-0 left-0">
        <div
          className={`bg-blue-900 h-1 transition-all duration-500 ease-in-out`}
          style={{ width: `${((currentSectionIndex + 1) * 100) / 2}%` }}
        ></div>

        {/* <div className="bg-blue-100 w-full h-full flex justify-between p-5">
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
        </div> */}
      </div>
    </div>
  );
};

export default ProfileData;
