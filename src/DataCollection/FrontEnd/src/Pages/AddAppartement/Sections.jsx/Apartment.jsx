import { useEffect, useState } from "react";
import { useApartmentContext } from "../../../context/ApartmentContext";

const Apartment = () => {
  const { addRooms, getRooms } = useApartmentContext();
  // Update the state with the values from the context
  useEffect(() => {
    const roomData = getRooms();
    console.log("roomData", roomData);


    for (let key in roomData) {
      set
    }

    setRoomInfo((prevInfo) => {
      return {
        ...prevInfo,
        bedrooms: { ...prevInfo.bedrooms, value: roomData.bedroom },
        bathrooms: { ...prevInfo.bathrooms, value: roomData.bathroom },
        acUnits: { ...prevInfo.acUnits, value: roomData.airConditioner },
        beds: { ...prevInfo.beds, value: roomData.beds },
        balconies: { ...prevInfo.balconies, value: roomData.balconies },
        tables: { ...prevInfo.tables, value: roomData.tables },
        chairs: { ...prevInfo.chairs, value: roomData.chairs },
      };
    });
  }, []);

  const [roomInfo, setRoomInfo] = useState({
    bedrooms: {
      label: "عدد غرف النوم",
      value: 1,
    },
    bathrooms: {
      label: "عدد الحمامات",
      value: 1,
    },
    acUnits: {
      label: "عدد التكييفات",
      value: 1,
    },
    beds: {
      label: "عدد السراير",
      value: 1,
    },
    balconies: {
      label: "عدد الشرفات",
      value: 1,
    },
    tables: {
      label: "عدد الطاولات",
      value: 1,
    },
    chairs: {
      label: "عدد الكراسي",
      value: 1,
    },
  });

  const handleIncrement = (room) => {
    setRoomInfo((prevInfo) => {
      const updatedInfo = {
        ...prevInfo,
        [room]: { ...prevInfo[room], value: prevInfo[room].value + 1 },
      };
      console.log(updatedInfo);
      return updatedInfo;
    });
  };

  const handleDecrement = (room) => {
    setRoomInfo((prevInfo) => {
      const updatedInfo = {
        ...prevInfo,
        [room]: {
          ...prevInfo[room],
          value: Math.max(1, prevInfo[room].value - 1),
        },
      };
      console.log(updatedInfo);
      return updatedInfo;
    });
  };

  useEffect(() => {
    addRooms(
      roomInfo.bedrooms.value,
      roomInfo.bathrooms.value,
      roomInfo.acUnits.value,
      roomInfo.beds.value,
      roomInfo.balconies.value,
      roomInfo.tables.value,
      roomInfo.chairs.value
    );
  }, [roomInfo]);

  return (
    <div className="mx-auto w-[700px] text-right fadeInAnmation">
      <h1 className="text-3xl font-semibold mb-8">
        أعطنا بعض المعلومات الرئيسية عن الشقة
      </h1>

      <div className="flex flex-col mx-auto">
        {Object.keys(roomInfo).map((room, index) => (
          <div key={index} className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">{roomInfo[room].label}</h2>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleDecrement(room)}
                className="border-2 w-9 h-9 text-2xl text-gray-600 border-gray-600 rounded-full hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-lg font-semibold">{roomInfo[room].value}</span>
              <button
                type="button"
                onClick={() => handleIncrement(room)}
                className="border-2 w-9 h-9 text-2xl text-gray-600 border-gray-600 rounded-full hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartment;
