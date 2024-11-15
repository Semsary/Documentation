const MidHeader = () => {
  return (
    <div>
      <div className="container mx-auto lg:px-32  flex flex-row p-2 justify-between ">
        <div className="flex gap-5 items-center">
          <div></div>
        </div>
        <div className="flex flex-row-reverse w-[400px] ">
          <button className="bg-[#0070cb] ml-[-1px] rounded-e-lg px-4 py-2 text-white">بحث</button>
          <input
            type="text"
            dir="rtl"
            id="first_name"
            className="bg-gray-50 border  w-full border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ابحث عن المنتجات"
            required
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MidHeader;
