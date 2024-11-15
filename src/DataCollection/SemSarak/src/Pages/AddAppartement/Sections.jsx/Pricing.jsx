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

  // Handle rent type change
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedRentType = rentType[selectedValue];

    if (selectedRentType) {
      setRentTypeSelect({ value: selectedValue, name: selectedRentType.name });
      setPrice((prevPrice) => ({ ...prevPrice, type: selectedValue }));
      addPrice(selectedRentType.value, price.price, price.semsar, price.guarantee);
      // toast.success("تم حفظ نوع الإيجار بنجاح");
    } else {
      console.error("Invalid rent type selected:", selectedValue);
    }
  };

  // Handle input changes and save data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrice((prevPrice) => {
      const updatedPrice = { ...prevPrice, [name]: value };
      addPrice(updatedPrice.type, updatedPrice.price, updatedPrice.semsar, updatedPrice.guarantee);
      // toast.success("تم حفظ الأسعار بنجاح");
      return updatedPrice;
    });
  };

  return (
    <div className="mx-auto max-w-[700px] px-10 text-right fadeInAnmation">
      <div className="flex flex-col mx-auto">
        <h1 className="text-3xl font-semibold mb-6">الاسعار</h1>
        <p className="text-[#808080] mb-8 mt-5 text-s">
          حدد الأسعار الخاصة بالإيجار
        </p>

        {/* Pricing Form */}
        <form>
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
                name="price"
                min={0}
                max={100000}
                className="inputStyle1"
                value={price.price}
                onChange={handleInputChange}
              />
            </div>

            {/* Semsar Commission Input */}
            <div className="py-3 justify-between items-center ">
              <span className="text-gray-600 font-semibold">عمولة سمسار:</span>
              <input
                type="number"
                id="in2"
                name="semsar"
                min={0}
                max={100000}
                className="inputStyle1"
                value={price.semsar}
                onChange={handleInputChange}
              />
            </div>

            {/* Guarantee Input */}
            <div className="py-3 justify-between items-center ">
              <span className="text-gray-600 font-semibold">التأمين:</span>
              <input
                type="number"
                id="in3"
                name="guarantee"
                min={0}
                max={100000}
                className="inputStyle1"
                value={price.guarantee}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Pricing;
