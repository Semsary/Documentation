import Location from "./Sections.jsx/Location";
import Pricing from "./Sections.jsx/Pricing";
import Rooms from "./Sections.jsx/Rooms";
import Services from "./Sections.jsx/Services";
import Type from "./Sections.jsx/Type";

const AddAppartementPage = () => {
  return (
    <div className="pt-40 flex flex-col justify-between">
      <div>
        {/* <Type /> */}
        {/* <Location /> */}
        {/* <Rooms /> */}
        {/* <Pricing /> */}
        <Services />
      </div>

      <div className="bg-[#EfEfEf] w-full h-20 fixed bottom-0 left-0">
        <div className="bg-blue-900 w-[70%] h-1"></div>
        <div className="bg-blue-100 w-full h-full flex justify-between p-5">
          <button className="ButtonStyle1" disabled={true}>
            التالى
          </button>
          <button className="ButtonStyle1">السابق</button>
        </div>
      </div>
    </div>
  );
};

export default AddAppartementPage;
