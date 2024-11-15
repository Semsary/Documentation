import { Link } from "react-router-dom";
import HeaderLogo from "./../../assets/Images/Logo/Logo.png";
const TopHeader = () => {
  return (
    <>
      <div className="container  mx-auto lg:px-32 flex flex-row p-2 justify-between ">
        <div className="flex gap-5 items-center">
          <div>
            <button className="rounded-md px-2 py-1 border-primaryDark  border-2 font-bold">
              AR
            </button>
          </div>
          <div className="flex flex-row-reverse w-[400px] ">
            <button className="bg-primaryDark ml-[-1px] rounded-e-lg px-4 py-1 text-white">
              بحث
            </button>
            <input
              type="text"
              dir="rtl"
              id="first_name"
              className="bg-gray-50 border  w-full border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ابحث "
              required
            />
          </div>
        </div>
        <div>
          <Link to="/">
            <img
              className="h-16 hover:cursor-pointer "
              src={HeaderLogo}
              alt="Header Logo"
            />
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TopHeader;
