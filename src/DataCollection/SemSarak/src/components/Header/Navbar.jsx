import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/Logo/Logo (2).png";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("/");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();

  const pages = [
    { path: "/", label: "الرئيسية" },
    { path: "/about", label: "عنا" },
    { path: "/contact", label: "تواصل معنا" },
    { path: "/add", label: "أضف شقتك" },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("تم تسجيل الخروج بنجاح");
      navigate("/login");
    } catch (error) {
      toast.error("خطأ في تسجيل الخروج");
      console.error("Failed to log out:", error);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (path) => {
    setActiveNav(path);
  };

  const confirmLogout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav
      className="bg-white shadow-lg z-50 fixed top-0 left-0 w-full block"
      style={{ direction: "ltr", fontFamily: "Alexandria" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Conditional Button/User Icon */}
          <div className="flex items-center md:mr-4">
            {currentUser ? (
              <div className="relative flex justify-center gap-3 flex-row-reverse">
                <Link to={"/account"}>
                  {/* Display user image if available */}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/semsarapp-dbd9a.firebasestorage.app/o/Avatars%2FAvatar.png?alt=media&token=57861da8-b98b-49b1-b878-3a231a72bc27"
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </Link>
                {/* Logout Button */}
                <p className="text-3xl text-gray-600">|</p>
                <div className="relative">
                  <button onClick={confirmLogout} className="">
                    <FiLogOut size={30} />
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-sm bg-[#333e6d] text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                تسجيل الدخول
              </Link>
            )}
          </div>

          {/* Navbar Links */}
          <div className="text-sm hidden md:flex flex-1 flex-row-reverse justify-center space-x-1">
            {pages.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="font-medium text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-all ease-in-out duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center ml-4">
            <div className="text-2xl font-bold text-indigo-600">
              <Link to="/">
                <img src={Logo} alt="logo" className="w-32" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white p-4 shadow-lg`}
      >
        {pages.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`block text-lg text-gray-700 py-2 px-4 rounded-md hover:bg-indigo-100 transition-all ease-in-out duration-300 ${
              activeNav === path ? "bg-indigo- 100 text-ind igo-600" : ""
            }`}
            onClick={() => handleNavClick(path)}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-md p-4">
            <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {/* Modal Content */}
              <div className="p-4 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  هل أنت متأكد أنك تريد تسجيل الخروج؟
                </h3>
                <button
                  onClick={() => { handleLogout(); closeModal(); }}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  نعم، تأكيد
                </button>
                <button
                  onClick={closeModal}
                  className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </nav>
  );
};

export default Navbar;
