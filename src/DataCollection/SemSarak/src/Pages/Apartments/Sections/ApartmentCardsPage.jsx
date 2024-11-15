import { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";
import { useFetchDataContext } from "../../../context/FetchDataContext";

const ApartmentCardsPage = () => {
  const { displayCardsData } = useFetchDataContext();
  const [apartments, setApartments] = useState([]);

  const [displyed, setDisplayed] = useState(30);

  useEffect(() => {
    setApartments(displayCardsData); 
  }, [displayCardsData]); // Re-run when displayCardsData changes

  const searchFunction = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredApartments = displayCardsData.filter(
      (apartment) =>
        apartment.name.toLowerCase().includes(searchQuery) ||
        apartment.description.toLowerCase().includes(searchQuery)
    );
    console.log(filteredApartments);
    
    setApartments(filteredApartments);
  };

  const Order = async () => {
    const RundomArray = apartments
      .map((apartment) => ({ apartment, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ apartment }) => apartment);

    await setApartments(RundomArray);
  };

  return (
    <>
      <div className="w-full p-4 flex flex-row-reverse 2xl:px-44 md:px-20 mx-auto">
        <div className="w-80">
          <input
            type="text"
            placeholder="ابحث عن شقتك..."
            className="inputStyle1"
            onChange={searchFunction}
          />
        </div>
      </div>

      <div
        className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
      2xl:px-44 gap-4 px-4 md:px-20 mx-auto"
      >
        {apartments
          .map((apartment) => ({ apartment, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ apartment }) => apartment)
          .map(
            (apartment, index) =>
              index < displyed && (
                <ApartmentCard key={index} apartment={apartment} />
              )
          )}
      </div>

      <div className="flex justify-center items-center p-4">
        <button
          className={`px-4 py-2 bg-mainColor text-white rounded ${
            displyed >= apartments.length ? "hidden" : "block"
          }`}
          onClick={() => {
            setDisplayed(displyed + 3);
          }}
        >
          عرض المزيد
        </button>

        <div className={`px-4 py-2  ${apartments.length ? "hidden" : "block"}`}>
          {" "}
          لا يوجد شقق لعرضها
        </div>
      </div>
    </>
  );
};

export default ApartmentCardsPage;
