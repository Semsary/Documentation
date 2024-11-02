import { useState } from "react";

const Apartment = () => {
    const [rooms, setRooms] = useState({
        bedroom: {
            name: "عدد غرف النوم",
            value: 1,
        },
        livingRoom: {
            name: "عدد غرف الجلوس",
            value: 1,
        },
        bathroom: {
            name: "عدد الحمامات",
            value: 1,
        },
        kitchen: {
            name: "هل يوجد مطبخ",
            value: true,
        },
        
    });

    const handleIncrement = (room) => {
        setRooms((prevRooms) => {
            const updatedRooms = {
                ...prevRooms,
                [room]: { ...prevRooms[room], value: prevRooms[room].value + 1 },
            };
            console.log(updatedRooms);
            return updatedRooms;
        });
    };

    const handleDecrement = (room) => {
        setRooms((prevRooms) => {
            const updatedRooms = {
                ...prevRooms,
                [room]: {
                    ...prevRooms[room],
                    value: Math.max(1, prevRooms[room].value - 1),
                },
            };
            console.log(updatedRooms);
            return updatedRooms;
        });
    };

    return (
      <div className="mx-auto w-[700px] text-right fadeInAnmation">
        <h1 className="text-3xl font-semibold mb-8">أعطنا بعض المعلومات الرئيسية عن الشقة</h1>

        <div className="flex flex-col mx-auto">
          {Object.keys(rooms).map((room, index) => (
            <div key={index} className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">{rooms[room].name}</h2>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleDecrement(room)}
                  className="border-2 w-9 h-9 text-2xl text-gray-600 border-gray-600 rounded-full hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{rooms[room].value}</span>
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
