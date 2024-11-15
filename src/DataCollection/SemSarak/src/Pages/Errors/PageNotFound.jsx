import Logo from "../../assets/Images/Logo/Logo (1).png";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <img
          src={Logo}
          alt="Page Not Found"
          className="w-72 h-72 object-cover mx-auto"
        />
        <h1 className="text-6xl font-extrabold text-red-600 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div className="mt-8">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition duration-300"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
