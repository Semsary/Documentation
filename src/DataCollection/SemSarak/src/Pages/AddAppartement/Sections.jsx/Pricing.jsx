import { useEffect, useState } from "react";
import { useApartmentContext } from "../../../context/ApartmentContext";
import toast, { Toaster } from "react-hot-toast";

const Pricing = () => {
  const { addPrice } = useApartmentContext();

  const [rentTypeSelect, setRentTypeSelect] = useState({
    value: "FullHome", // Default value as string
    name: "استئجار الشقة بالكامل",
  });

  const [price, setPrice] = useState({
    price: 0,
    semsar: 0,
    guarantee: 0,
    type: "FullHome",
  });

  const [rentType] = useState({
    FullHome: {
      name: "استئجار الشقة بالكامل",
      value: "FullHome",
    },
    SingleRoom: {
      name: "استئجار غرفة منفردة",
      value: "SingleRoom",
    },
    SingleBed: {
      name: "استئجار سرير فقط",
      value: "SingleBed",
    },
  });

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    const selectedRentType = rentType[selectedValue];

    if (selectedRentType) {
      setRentTypeSelect({ value: selectedValue, name: selectedRentType.name });
      setPrice({ ...price, type: selectedValue });
    } else {
      console.error("Invalid rent type selected:", selectedValue);
    }
  };

  const HandelSubmit = (e) => {
    e.preventDefault();
    const priceValue = e.target[1].value;
    const semsar = e.target[2].value;
    const guarantee = e.target[3].value;
    const Type = rentTypeSelect.value;
    addPrice(Type, priceValue, semsar, guarantee);
    toast.success("تم حفظ الأسعار بنجاح");
  };

  return (
    <div className="mx-auto max-w-[700px] px-10 text-right fadeInAnmation">
      <div className="flex flex-col mx-auto">
        <h1 className="text-3xl font-semibold mb-6">الاسعار</h1>
        <p className="text-[#808080] mb-8 mt-5 text-s">
          حدد الأسعار الخاصة بالإيجار
        </p>

        {/* Pricing Form */}
        <form onSubmit={HandelSubmit}>
          <div className="space-y-4">
            {/* Rent Type Selector */}
            <div className="py-3 justify-between items-center ">
              <span className="text-gray-600 font-semibold">نوع الايجار:</span>
              <select
                className="inputStyle1 "
                value={rentTypeSelect.value}
                onChange={handleSelectChange}
              >
                {Object.keys(rentType).map((type) => (
                  <option key={type} value={rentType[type].value}>
                    {rentType[type].name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Input */}
            <div className="py-3 justify-between items-center ">
              <span className="text-gray-600 font-semibold">
                سعر {rentTypeSelect.name}:
              </span>
              <input
                type="number"
                id="in1"
                min={0}
                max={100000}
                className="inputStyle1"
                value={price.price}
                onChange={(e) => setPrice({ ...price, price: e.target.value })}
              />
            </div>

            {/* Semsar Commission Input */}
            <div className="py-3 justify-between items-center ">
              <span className="text-gray-600 font-semibold">عمولة سمسار:</span>
              <input
                type="number"
                id="in2"
                min={0}
                max={100000}
                className="inputStyle1"
                value={price.semsar}
                onChange={(e) => setPrice({ ...price, semsar: e.target.value })}
              />
            </div>

            {/* Guarantee Input */}
            <div className="py-3 justify-between items-center ">
              <span className="text-gray-600 font-semibold">التأمين:</span>
              <input
                type="number"
                id="in3"
                min={0}
                max={100000}
                className="inputStyle1"
                value={price.guarantee}
                onChange={(e) =>
                  setPrice({ ...price, guarantee: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-mainColor border border-transparent rounded-md shadow-sm hover:bg-mainColorHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              حفظ الاسعار
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Pricing;
