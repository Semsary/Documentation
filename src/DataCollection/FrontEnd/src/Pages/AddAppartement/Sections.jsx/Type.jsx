import { IoHomeOutline } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { useEffect, useState } from "react";
import { useApartmentContext } from "../../../context/ApartmentContext";

const Type = () => {
  const { addHomeType, getHomeType } = useApartmentContext();
  const HomeTypes = [
    {
      Name: "مسكن كامل",
      StateName: "EntireHome",
      Description: "يحصل الضيوف على المكان بأكمله لأنفسهم.",
      icon: <IoHomeOutline size={44} />,
    },
    {
      Name: "غرفة",
      StateName: "PrivateRoom",
      Description:
        "يحصل الضيوف على غرفة خاصة لهم في بيت، بالإضافة إلى إمكانية الوصول إلى الأماكن المشتركة.",
      icon: <BsDoorOpen size={44} />,
    },
    {
      Name: "غرفة مشتركة في نُزُل",
      StateName: "SharedRoom",
      Description:
        "ينام الضيوف في غرفة مشتركة في نُزُل مُدار بشكل احترافي مع وجود موظفين في الموقع على مدار 24 ساعة لتقديم المساعدة.",
      icon: <MdOutlineBedroomParent size={44} />,
    },
  ];

  // set value of selected item to the context getHomeType

  useEffect(() => {
    const selectedTypeIndex = HomeTypes.findIndex(
      (type) => type.StateName === getHomeType()
    );
    if (selectedTypeIndex !== -1) {
      setSlectedItem(selectedTypeIndex);
    }
  }, [getHomeType]);


  const [slectedItem, setSlectedItem] = useState();

  useEffect(() => {
    if (slectedItem !== undefined) {
      console.log(slectedItem);
      addHomeType(HomeTypes[slectedItem].StateName);
    }
  }, [slectedItem]);

  return (
    <>
      <div className="mx-auto w-[700px] max-w-full fadeInAnmation">
        <div className="flex flex-col mx-auto">
          <h1 className="text-3xl m-10 font-semibold">ما نوع المسكن الذي سيكون متاحًا للمستأجر؟</h1>
          {HomeTypes.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setSlectedItem(index)}
                className={`flex border-2 p-5 flex-row justify-between fadeInAnmation
                m-2 hover:border-black rounded-lg hover:bg-[#f3f2f2]
                border-[#a3a2a2]  ${
                  slectedItem === index
                    ? " border-2 bg-[#f3f2f2] border-x-black border-y-black "
                    : ""
                }`}
              >
                <div className="w-[70%]">
                  <h2 className="text-xl font-medium">{item.Name} </h2>
                  <p className="text-[#808080] text-s ">{item.Description}</p>
                </div>
                <div className="mt-3">{item.icon}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Type;



