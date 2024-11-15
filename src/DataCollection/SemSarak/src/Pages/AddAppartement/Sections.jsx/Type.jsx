import { IoHomeOutline } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { useEffect, useState } from "react";
import { useApartmentContext } from "../../../context/ApartmentContext";

const Type = () => {
  const { addHomeType, getHomeType } = useApartmentContext();
  const RentTypes = [
    {
      Name: "شقة كاملة",
      StateName: "EntireApartment",
      Description:
        "يحصل المستأجرون على الشقة بأكملها لأنفسهم، مع كافة المرافق.",
      icon: <IoHomeOutline size={44} />,
    },
    {
      Name: "غرفة",
      StateName: "PrivateRoom",
      Description:
        "يحصل المستأجرون على غرفة خاصة لهم في شقة أو منزل، مع إمكانية الوصول إلى المناطق المشتركة.",
      icon: <BsDoorOpen size={44} />,
    },
    {
      Name: "سرير",
      StateName: "BedSpace",
      Description:
        "يحصل المستأجرون على سرير في غرفة مشتركة مع إمكانية الوصول إلى المرافق المشتركة.",
      icon: <MdOutlineBedroomParent size={44} />,
    },
  ];


  // set value of selected item to the context getHomeType

  useEffect(() => {
    const selectedTypeIndex = RentTypes.findIndex(
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
      addHomeType(RentTypes[slectedItem].StateName);
    }
  }, [slectedItem]);

  return (
    <>
      <div className="mx-auto w-[700px] max-w-full fadeInAnmation">
        <div className="flex flex-col mx-auto">
          <h1 className="text-3xl m-10 font-semibold">
            ما نوع المسكن الذي سيكون متاحًا للمستأجر؟
          </h1>
          {RentTypes.map((item, index) => {
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



