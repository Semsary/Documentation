import { useEffect, useState } from "react";

const Rooms = () => {
  const [Details, setDetails] = useState({
    beds: {
      name: "الاسرة فى الغرفة",
      value: 1,
    },
    bathrooms: {
      name: "هل يوجد حمام بالغرفة",
      value: true,
    },
    aircondition: {
      name: "هل يوجد تكييف",
      value: true,
    },
    balcony: {
      name: "هل يوجد شرفة",
      value: true,
    },
    dressRoom: {
      name: "هل يوجد دولاب ملابس",
      value: true,
    },
  });

  useEffect(() => {
    console.log(Details);
  }, [Details]);

  const CounterClass = ({ room }) => {
    return (
      <div className="CounterClass flex items-center gap-3">
      <button
        type="button"
        onClick={() =>
        setDetails((prevDetails) => {
          const updatedValue = prevDetails[room].value - 1;
          const updatedDetails = {
          ...prevDetails,
          [room]: { ...prevDetails[room], value: updatedValue < 1 ? 1 : updatedValue },
          };
          return updatedDetails;
        })
        }
        className="border-2 w-9 h-9 text-2xl text-gray-600 border-gray-600 rounded-full hover:bg-gray-100"
      >
        -
      </button>
      <span>{Details[room].value}</span>
      <button
        type="button"
        onClick={() =>
        setDetails((prevDetails) => {
          const updatedValue = prevDetails[room].value + 1;
          const updatedDetails = {
          ...prevDetails,
          [room]: { ...prevDetails[room], value: updatedValue > 10 ? 10 : updatedValue },
          };
          return updatedDetails;
        })
        }
        className="border-2 w-9 h-9 text-2xl text-gray-600 border-gray-600 rounded-full hover:bg-gray-100"
      >
        +
      </button>
      </div>
    );
  };

  const BoolenClass = ({ room }) => {
    return (
      <button
        type="button"
        onClick={() =>
          setDetails((prevDetails) => {
            const updatedDetails = {
              ...prevDetails,
              [room]: { ...prevDetails[room], value: !prevDetails[room].value },
            };
            return updatedDetails;
          })
        }
        className={`border-2 w-28  h-9 text-2xl text-gray-600 border-gray-600 rounded-full hover:bg-gray-100 ${
          Details[room].value ? "bg-green-200" : "bg-gray-300"
        }`}
        aria-pressed={Details[room].value}
      >
        {Details[room].value ? "يوجد" : "لا يوجد"}
      </button>
    );
  };

  return (
    <div className="mx-auto w-[700px] text-right">
      <h1 className="text-3xl font-semibold mb-8">أعطنا بعض المعلومات الرئيسية عن الشقة</h1>

      <div className="flex flex-col mx-auto">
        {Object.keys(Details).map((room, index) => (
          <div key={index} className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">{Details[room].name}</h2>
            <div className="flex items-center gap-3">
              {index === 0 ? <CounterClass room={room} /> : <BoolenClass room={room} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
