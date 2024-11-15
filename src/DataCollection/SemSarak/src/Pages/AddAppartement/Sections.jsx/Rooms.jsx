import { useEffect, useState } from "react";
import { useApartmentContext } from "../../../context/ApartmentContext";

const Rooms = () => {
  const { addApartmentInfo, getApartmentInfo } = useApartmentContext();
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

  const handleDecrement = (room) => {
    if (roomInfo[room].value > 0) {
      setRoomInfo({
        ...roomInfo,
        [room]: {
          ...roomInfo[room],
          value: roomInfo[room].value - 1,
        },
      });
    }
  };

  const handleIncrement = (room) => {
    setRoomInfo({
      ...roomInfo,
      [room]: {
        ...roomInfo[room],
        value: roomInfo[room].value + 1,
      },
    });
  };

  useEffect(() => {
    const apartmentInfo = getApartmentInfo();
    if (apartmentInfo) {
      setRoomInfo({
        bedrooms: {
          label: "عدد غرف النوم",
          value: apartmentInfo.bedrooms,
        },
        bathrooms: {
          label: "عدد الحمامات",
          value: apartmentInfo.bathrooms,
        },
        acUnits: {
          label: "عدد التكييفات",
          value: apartmentInfo.acUnits,
        },
        beds: {
          label: "عدد السراير",
          value: apartmentInfo.beds,
        },
        balconies: {
          label: "عدد الشرفات",
          value: apartmentInfo.balconies,
        },
        tables: {
          label: "عدد الطاولات",
          value: apartmentInfo.tables,
        },
        chairs: {
          label: "عدد الكراسي",
          value: apartmentInfo.chairs,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (roomInfo) {
      // Assuming roomInfo has the properties directly
      const { acUnits, bedrooms, bathrooms, beds, balconies, tables, chairs } =
        roomInfo;

      // Ensure only numeric values are passed to addApartmentInfo
      addApartmentInfo(
        acUnits.value,
        bedrooms.value,
        bathrooms.value,
        beds.value,
        balconies.value,
        tables.value,
        chairs.value
      );
    }
  }, [roomInfo]);

  // Assuming roomInfo has the values to uptade the state on mount

  return (
    <div className="mx-auto max-w-[700px] text-right fadeInAnmation px-10">
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
              <span className="text-lg font-semibold">
                {roomInfo[room].value}
              </span>
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

export default Rooms;
